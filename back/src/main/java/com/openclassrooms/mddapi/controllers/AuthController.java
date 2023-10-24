package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.payload.request.LoginRequest;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AuthController {
    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;


    @PostMapping("/api/auth/login")
    public ResponseEntity<Object> login(@Valid @RequestBody LoginRequest loginRequest) {
        User userFound = this.userRepository.findByEmail(loginRequest.getEmail()).orElse(null);
        if (userFound != null) {
            return ResponseEntity.ok("{}");
        } else {
            return ResponseEntity.badRequest().body("error");
        }
    }


}
