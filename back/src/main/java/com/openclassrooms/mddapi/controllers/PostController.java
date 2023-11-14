package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.mapper.PostMapper;
import com.openclassrooms.mddapi.mapper.SubjectMapper;
import com.openclassrooms.mddapi.models.Post;
import com.openclassrooms.mddapi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    private PostService postService;

    //TODO : à supprimer si je pars sur le choix mapstruct
    //@Autowired
    //private ModelMapper modelMapper;

    @Autowired
    private PostMapper postMapper;


    @GetMapping("{userId}")
    public ResponseEntity<?> findPostsToSubjectsSubscribed(@PathVariable("userId") String userId) {
        try {
            List<Post> posts = postService.findPostsToSubjectsSubscribed(Long.parseLong(userId));
            //Si appel OK, on retourne OK
            return ResponseEntity.ok().body(postMapper.toDto(posts));
        } catch (NumberFormatException e) {
            //Si le parse des variables en entrée échoue (pas des entiers), alors on retourne BAD REQUEST
            return ResponseEntity.badRequest().build();
        }
    }

}
