package com.openclassrooms.mddapi.mapper;


import com.openclassrooms.mddapi.dto.CommentDto;
import com.openclassrooms.mddapi.models.Comment;
import com.openclassrooms.mddapi.models.Post;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repository.PostRepository;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@Mapper(componentModel = "spring")
public abstract class CommentMapper implements EntityMapperToDto<CommentDto, Comment> {

    @Autowired
    PostRepository postRepository;
    @Autowired
    UserRepository userRepository;

    //Du front vers le back, on récupère le user ID (auteur) qu'il faut transformer en User
    //et le post Id qu'il faut transformer en Post
    @Mapping(target = "user", expression = "java(getUserFromUserId(commentDto.getUser_id()))")
    @Mapping(target = "post", expression = "java(getPostFromPostId(commentDto.getPost_id()))")
    public abstract Comment toEntity(CommentDto commentDto);

    @Mapping(source = "comment.user.id", target = "user_id")
    @Mapping(source = "comment.user.name", target = "user_name")
    @Mapping(source = "comment.post.id", target = "post_id")
    public abstract CommentDto toDto(Comment comment);

    User getUserFromUserId(Long user_id) {
        return this.userRepository.findById(user_id).orElse(null);
    }

    Post getPostFromPostId(Long post_id) {
        return this.postRepository.findById(post_id).orElse(null);
    }
}

