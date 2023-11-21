package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.dto.PostDto;
import com.openclassrooms.mddapi.dto.UserDto;
import com.openclassrooms.mddapi.mapper.PostMapper;
import com.openclassrooms.mddapi.mapper.UserMapper;
import com.openclassrooms.mddapi.models.Post;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.repository.CommentRepository;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import com.openclassrooms.mddapi.service.PostService;
import com.openclassrooms.mddapi.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

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

    //TODO : POST ou PUT ????
    @PostMapping()
    public ResponseEntity<?> update(@Valid @RequestBody UserDto userDto) {
        //Mise à jour du user en BDD
        User userUpdated = userService.updateUser(userDto);
        //Si user retourné non null alors OK, sinon BAD REQUEST
        if (userUpdated != null) return ResponseEntity.ok().body(userMapper.toDto(userUpdated));
        else return ResponseEntity.badRequest().build();
    }

}
