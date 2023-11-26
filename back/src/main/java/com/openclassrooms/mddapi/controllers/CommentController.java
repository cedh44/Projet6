package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.dto.CommentDto;
import com.openclassrooms.mddapi.mapper.CommentMapper;
import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.models.Post;
import com.openclassrooms.mddapi.payload.response.MessageResponse;
import com.openclassrooms.mddapi.repository.CommentRepository;
import com.openclassrooms.mddapi.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private CommentMapper commentMapper;


    @GetMapping("/post/{postId}")
    public ResponseEntity<?> findComments(@PathVariable("postId") String postId) {
        try {
            Optional<Post> post = this.postRepository.findById(Long.parseLong(postId));
            //Si l'article n'est pas trouvé, alors on retourne BAD REQUEST
            if (post.isEmpty()) return ResponseEntity.badRequest().build();
            //Sinon on recherche tous les commentaires du post
            List<Comment> comments = commentRepository.findAllByPost(post.orElse(null));
            //Si appel OK, on retourne OK et la liste des commentaires au format Dto
            return ResponseEntity.ok().body(commentMapper.toDto(comments));
        } catch (NumberFormatException e) {
            //Si le parse des variables en entrée échoue (pas des entiers), alors on retourne BAD REQUEST
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping()
    public ResponseEntity<?> create(@Valid @RequestBody CommentDto commentDto) {
        //On récupère le comment depuis le DTO
        Comment commentToCreate = commentMapper.toEntity(commentDto);
        //Création du post en BDD
        Comment commentCreated = this.commentRepository.save(commentToCreate);
        //Si post retourné non null alors OK, sinon BAD REQUEST
        if (commentCreated != null) return ResponseEntity.ok().body(new MessageResponse("Commentaire ajouté"));
        else return ResponseEntity.badRequest().build();
    }

}
