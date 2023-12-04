package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.mapper.SubjectMapper;
import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.repository.SubjectRepository;
import com.openclassrooms.mddapi.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/subject")
public class SubjectController {
    @Autowired
    SubjectService subjectService;
    @Autowired
    SubjectMapper subjectMapper;
    @Autowired
    SubjectRepository subjectRepository;


    //Retourne tous les subjects (thèmes)
    @GetMapping
    public ResponseEntity<?> findAll() {
        //On récupére l'ensemble des subjects (thèmes)
        List<Subject> subjects = this.subjectRepository.findAll();
        //On retourne OK et la liste des subjects au format Dto
        return ResponseEntity.ok().body(subjectMapper.toDto(subjects));
    }

    //Retourne tous les subjects (thèmes) auxquels l'utilisateur est abonné
    @GetMapping("/subscribedsubjects/{userId}")
    public ResponseEntity<?> findAllSubscribedSubjects(@PathVariable("userId") String userId) {
        try {
            List<Subject> subjects = this.subjectService.findSubjectsSubscribed(Long.parseLong(userId));
            //Limiter le contenu du post à 225 car et ajouter "..."
            subjects.forEach(subject -> {
                if (subject.getContent().length() > 224)
                    subject.setContent(subject.getContent().substring(0, 224).concat("..."));
            });
            return ResponseEntity.ok().body(subjectMapper.toDto(subjects));
        } catch (NumberFormatException e) {
            //Si le parse des variables en entrée échoue (pas des entiers), alors on retourne BAD REQUEST
            return ResponseEntity.badRequest().build();
        }
    }

    //Retourne tous les subjects (thèmes) auxquels l'utilisateur n'est pas abonné
    @GetMapping("/notsubscribedsubjects/{userId}")
    public ResponseEntity<?> findAllNotSubscribedSubjects(@PathVariable("userId") String userId) {
        try {
            List<Subject> subjects = this.subjectService.findNotSubjectsSubscribed(Long.parseLong(userId));
            //Limiter le contenu du post à 225 car et ajouter "..."
            subjects.forEach(subject -> {
                if (subject.getContent().length() > 224)
                    subject.setContent(subject.getContent().substring(0, 224).concat("..."));
            });
            return ResponseEntity.ok().body(subjectMapper.toDto(subjects));
        } catch (NumberFormatException e) {
            //Si le parse des variables en entrée échoue (pas des entiers), alors on retourne BAD REQUEST
            return ResponseEntity.badRequest().build();
        }
    }

    //Abonnement à un subject (thème)
    @PostMapping("{id}/subscribe/{userId}")
    public ResponseEntity<?> subscribe(@PathVariable("id") String id, @PathVariable("userId") String userId) {
        try {
            this.subjectService.subscribe(Long.parseLong(id), Long.parseLong(userId));
            //Si subscribe OK, on retourne OK
            return ResponseEntity.ok().build();
        } catch (NumberFormatException e) {
            //Si le parse des variables en entrée échoue (pas des entiers), alors on retourne BAD REQUEST
            return ResponseEntity.badRequest().build();
        }
    }

    //Désabonnement à un subject (thème)
    @PostMapping("{id}/unsubscribe/{userId}")
    public ResponseEntity<?> unSubscribe(@PathVariable("id") String id, @PathVariable("userId") String userId) {
        try {
            this.subjectService.unSubscribe(Long.parseLong(id), Long.parseLong(userId));
            //Si subscribe OK, on retourne OK
            return ResponseEntity.ok().build();
        } catch (NumberFormatException e) {
            //Si le parse des variables en entrée échoue (pas des entiers), alors on retourne BAD REQUEST
            return ResponseEntity.badRequest().build();
        }
    }
}
