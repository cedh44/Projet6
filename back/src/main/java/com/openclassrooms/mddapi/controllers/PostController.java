package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.dto.PostDto;
import com.openclassrooms.mddapi.mapper.PostMapper;
import com.openclassrooms.mddapi.models.Post;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

    @PostMapping()
    public ResponseEntity<?> create(@Valid @RequestBody PostDto postDto) {
        //On récupère le post depuis le DTO
        Post postToCreate = postMapper.toEntity(postDto);
        //Création du post en BDD
        Post postCreated = this.postService.create(postToCreate);
        //Si post retourné non null alors OK, sinon BAD REQUEST
        if (postCreated != null) return ResponseEntity.ok().body(new MessageResponse("Article créé"));
        else return ResponseEntity.badRequest().build();
    }
}
