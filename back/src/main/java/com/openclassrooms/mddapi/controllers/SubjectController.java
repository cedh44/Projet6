package com.openclassrooms.mddapi.controllers;


import com.openclassrooms.mddapi.mapper.SubjectMapper;
import com.openclassrooms.mddapi.models.Subject;
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
    private SubjectService subjectService;

    //TODO : à supprimer si je pars sur le choix mapstruct
    //@Autowired
    //private ModelMapper modelMapper;

    @Autowired
    private SubjectMapper subjectMapper;


    @GetMapping
    public ResponseEntity<?> findAll() {
        List<Subject> subjects = subjectService.findAll();
        return ResponseEntity.ok().body(subjectMapper.toDto(subjects));
        //return ResponseEntity.ok().body(convertToDtoList(subjects));
    }

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


    //TODO : à supprimer si je pars sur le choix mapstruct
/*    private SubjectDto convertToDto(Subject subject) {
        SubjectDto subjectDto = modelMapper.map(subject, SubjectDto.class);
        return subjectDto;
    }

    private List<SubjectDto> convertToDtoList(List<Subject> subjects) {
        //TODO : Ne renvoyer que les id des users
        List<SubjectDto> subjectsDto = subjects.stream().map(
                subject -> modelMapper.map(subject, SubjectDto.class))
                .collect(Collectors.toList());
        return subjectsDto;
    }*/
}
