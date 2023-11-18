package com.openclassrooms.mddapi.mapper;


import com.openclassrooms.mddapi.dto.SubjectDto;
import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
@Mapper(componentModel = "spring", uses = {}, imports = {Arrays.class, Collectors.class, Subject.class, User.class, Collections.class, Optional.class})
public interface SubjectMapper extends EntityMapperToDto<SubjectDto, Subject> {

    @Mapping(target = "users", expression = "java(mapUsers(subject.getUsers()))")
    SubjectDto toDto(Subject subject);

    //Récupérer les ids des users seulement
    default List<Long> mapUsers(List<User> users) {
        //Retourne les id des users (sans name, email et password)
        return Optional.ofNullable(users).orElseGet(Collections::emptyList).stream().map(u -> u.getId()).collect(Collectors.toList());
    }
}
