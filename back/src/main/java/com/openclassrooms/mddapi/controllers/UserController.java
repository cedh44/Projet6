package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.dto.UserDto;
import com.openclassrooms.mddapi.mapper.UserMapper;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserMapper userMapper;
    @Autowired
    UserService userService;

    @PutMapping("{id}")
    public ResponseEntity<?> update(@Valid @PathVariable("id") String id, @RequestBody UserDto userDto) {
        try {
            //Mise à jour du user en BDD
            userDto.setId(Long.parseLong(id));
            User userUpdated = userService.updateUser(userDto);
            //Si user retourné non null alors OK et renvoit du user à jour, sinon BAD REQUEST
            if (userUpdated != null) return ResponseEntity.ok().body(userMapper.toDto(userUpdated));
            else return ResponseEntity.badRequest().build();
        } catch (NumberFormatException e) {
            return ResponseEntity.badRequest().build();
        } catch (DataIntegrityViolationException e) {
            //Cas d'usage : un utilisateur saisit un autre email que le sien mais déjà présent en BDD : violation de contrainte d'unicité.
            // Renvoyer un BAD REQUEST
            return ResponseEntity.badRequest().build();
        }
    }

}
