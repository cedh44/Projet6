package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.exception.BadRequestException;
import com.openclassrooms.mddapi.exception.NotFoundException;
import com.openclassrooms.mddapi.models.Post;
import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repository.SubjectRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SubjectService {

    @Autowired
    UserRepository userRepository;
    SubjectRepository subjectRepository;

    public SubjectService(SubjectRepository subjectRepository) {
        this.subjectRepository = subjectRepository;
    }

    //Retourne la liste des subjects où l'utilisateur est abonné
    public List<Subject> findSubjectsSubscribed(Long userId) {
        List<Post> postsToSubjectsSubscribed = new ArrayList<>();
        //Récupérer le user
        User userFound = this.userRepository.findById(userId).orElse(null);
        return this.subjectRepository.findSubjectsByUsersIs(userFound);
    }

    //Retourne la liste des subjects où l'utilisateur n'est pas abonné
    public List<Subject> findNotSubjectsSubscribed(Long userId) {
        List<Post> postsToSubjectsSubscribed = new ArrayList<>();
        //Récupérer le user
        User userFound = this.userRepository.findById(userId).orElse(null);
        return this.subjectRepository.findSubjectsByUsersIsNotContaining(userFound);
    }

    //Abonnement à un un subject
    public void subscribe(Long id, Long userId) {
        //Récupération du subject et du user en question
        Subject subject = this.subjectRepository.findById(id).orElse(null);
        User user = this.userRepository.findById(userId).orElse(null);
        if (subject == null || user == null) {
            //Si l'un des deux est null on lance une exception qui va retourner HttpStatus.NOT_FOUND dans la réponse du serveur
            throw new NotFoundException();
        }

        //On boucle parmi la liste des users du suject pour voir si l'Id du user est présent (il ne doit pas l'être)
        boolean isSubscribed = subject.getUsers().stream().anyMatch(o -> o.getId().equals(userId));
        if (isSubscribed) {
            //Si présent on lance une exception qui va retourner HttpStatus.BAD_REQUEST dans la réponse du serveur
            throw new BadRequestException();
        }

        //Ajout du user parmi la liste des users du subject
        subject.getUsers().add(user);
        //Et sauvegarde
        this.subjectRepository.save(subject);
    }

    //Désabonnement à un un subject
    public void unSubscribe(Long id, Long userId) {
        //Récupération du subject et du user en question
        Subject subject = this.subjectRepository.findById(id).orElse(null);
        User user = this.userRepository.findById(userId).orElse(null);
        if (subject == null || user == null) {
            //Si l'un des deux est null on lance une exception qui va retourner HttpStatus.NOT_FOUND dans la réponse du serveur
            throw new NotFoundException();
        }

        //On boucle parmi la liste des users du suject pour voir si l'Id du user est présent (il doit l'être)
        boolean isSubscribed = subject.getUsers().stream().anyMatch(o -> o.getId().equals(userId));
        if (!isSubscribed) {
            //Si pas présent on lance une exception qui va retourner HttpStatus.BAD_REQUEST dans la réponse du serveur
            throw new BadRequestException();
        }

        //Suppression du user parmi la liste des users du subject
        subject.getUsers().remove(user);
        //Et sauvegarde
        this.subjectRepository.save(subject);
    }
}
