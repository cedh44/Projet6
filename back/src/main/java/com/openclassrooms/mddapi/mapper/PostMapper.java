package com.openclassrooms.mddapi.mapper;


import com.openclassrooms.mddapi.dto.PostDto;
import com.openclassrooms.mddapi.models.Post;
import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repository.SubjectRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public abstract class PostMapper implements EntityMapperToEntity<PostDto, Post>, EntityMapperToDto<PostDto, Post> {

    @Autowired
    SubjectRepository subjectRepository;
    @Autowired
    UserRepository userRepository;

    //Du front vers le back, on récupère le user ID (auteur) qu'il faut transformer en User
    //et le subject Id qu'il faut transformer en Subject
    @Mapping(target = "user", expression = "java(getUserFromUserId(postDto.getUser_id()))")
    @Mapping(target = "subject", expression = "java(getSubjectFromSubjectId(postDto.getSubject_id()))")
    public abstract Post toEntity(PostDto postDto);

    @Mapping(source = "post.user.id", target = "user_id")
    @Mapping(source = "post.user.name", target = "user_name")
    @Mapping(source = "post.subject.id", target = "subject_id")
    @Mapping(source = "post.subject.title", target = "subject_title")
    public abstract PostDto toDto(Post post);

    User getUserFromUserId(Long user_id) {
        return this.userRepository.findById(user_id).orElse(null);
    }

    Subject getSubjectFromSubjectId(Long subject_id) {
        return this.subjectRepository.findById(subject_id).orElse(null);
    }
}

