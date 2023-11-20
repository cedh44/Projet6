package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.dto.PostDto;
import com.openclassrooms.mddapi.mapper.PostMapper;
import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.models.Post;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.repository.CommentRepository;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/post")
public class PostController {
    @Autowired
    PostService postService;
    @Autowired
    PostMapper postMapper;
    @Autowired
    CommentRepository commentRepository;
    @Autowired
    PostRepository postRepository;


    @GetMapping("/user/{userId}")
    public ResponseEntity<?> findPostsToSubjectsSubscribed(@PathVariable("userId") String userId) {
        try {
            List<Post> posts = postService.findPostsToSubjectsSubscribed(Long.parseLong(userId));
            //Si appel OK, on retourne OK et la liste des posts au format Dto
            return ResponseEntity.ok().body(postMapper.toDto(posts));
        } catch (NumberFormatException e) {
            //Si le parse des variables en entrée échoue (pas des entiers), alors on retourne BAD REQUEST
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("{postId}")
    public ResponseEntity<?> findPostById(@PathVariable("postId") String postId) {
        try {
            Optional<Post> post = postRepository.findById(Long.parseLong(postId));
            //Si appel OK, on retourne OK et la liste des posts au format Dto
            return ResponseEntity.ok().body(postMapper.toDto(post.orElse(null)));
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
        Post postCreated = this.postRepository.save(postToCreate);
        //Si post retourné non null alors OK, sinon BAD REQUEST
        if (postCreated != null) return ResponseEntity.ok().body(new MessageResponse("Article créé"));
        else return ResponseEntity.badRequest().build();
    }

}
