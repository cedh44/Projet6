package com.openclassrooms.mddapi.mapper;


import com.openclassrooms.mddapi.dto.PostDto;
import com.openclassrooms.mddapi.dto.SubjectDto;
import com.openclassrooms.mddapi.models.Post;
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
@Mapper(componentModel = "spring", uses = {}, imports = {Arrays.class, Collectors.class, Post.class, Subject.class, User.class, Collections.class, Optional.class})
public interface PostMapper extends EntityMapper<PostDto, Post> {

    //Dans ce DTO, on retourne au back pour chaque post : id, title, content, createdAt, name du user et title du subject
    @Mapping(source = "post.user.name", target = "user_name")
    @Mapping(source = "post.subject.title", target = "subject_title")
    PostDto toDto(Post post);

}
