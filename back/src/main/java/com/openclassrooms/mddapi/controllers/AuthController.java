package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.payload.request.LoginRequest;
import com.openclassrooms.mddapi.payload.request.RegisterRequest;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.payload.response.ResponseWithToken;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AuthController {
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/api/auth/login")
    public ResponseEntity<?> login(@Valid @RequestBody LoginRequest loginRequest) {
        //Recherche du user par email
        User userFound = this.userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
        //Sinon recherche du user par name
        if(userFound == null) userFound = this.userRepository.findByName(loginRequest.getEmail()).orElse(null);

        if (userFound != null) {
            //Vérification du password
            if (!passwordEncoder.matches(loginRequest.getPassword(), userFound.getPassword()))
                return ResponseEntity.badRequest().body(new MessageResponse("Error"));
            else
                //Login OK : génération d'un token
                return ResponseEntity.ok(new ResponseWithToken(jwtUtils.generateToken(userFound.getEmail()), userFound.getId(), userFound.getName(), userFound.getEmail()));
        } else {
            return ResponseEntity.badRequest().body(new MessageResponse("Error"));
        }
    }

    @PostMapping("/api/auth/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody RegisterRequest registerRequest) {
        //Vérif si email existant
        if (userRepository.existsByEmail(registerRequest.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already taken!"));
        }

        //Création de compte
        User user = new User(registerRequest.getEmail(), registerRequest.getName(), passwordEncoder.encode(registerRequest.getPassword()));
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }


}
