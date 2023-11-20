package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.models.Post;
import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.SubjectRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostService {

    @Autowired
    PostRepository postRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    SubjectRepository subjectRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    //Retourne une liste avec tous les subjects (utilisation du findAll hérité de JpaRepository)
    public List<Post> findPostsToSubjectsSubscribed(Long userId) {
        List<Post> postsToSubjectsSubscribed = new ArrayList<>();
        //Récupérer le user
        User userFound = this.userRepository.findById(userId).orElse(null);

        //Récupérer les subjects du user
        List<Subject> subjectsSubscribed = subjectRepository.findSubjectsByUsersIs(userFound);

        //Récupérer les posts par subject
        subjectsSubscribed.stream().map(subject -> postsToSubjectsSubscribed.addAll(postRepository.findAllBySubject(subject))).collect(Collectors.toList());

        return postsToSubjectsSubscribed;
    }
}
