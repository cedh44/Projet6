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


    @GetMapping
    public ResponseEntity<?> findAll() {
        //On récupére l'ensemble des subjects
        List<Subject> subjects = this.subjectRepository.findAll();
        //On retourne OK et la liste des subjects au format Dto
        return ResponseEntity.ok().body(subjectMapper.toDto(subjects));
    }

    //Abonnement à un thème (subject)
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

    //Désabonnement à un thème (subject)
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
