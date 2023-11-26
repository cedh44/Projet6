package com.openclassrooms.mddapi.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter //Lombok pour getter et setter en auto
@Setter
public class CommentDto {
    private Long id;

    private String content;

    //Retourne le user auteur du post
    private Long user_id;
    private String user_name;

    private Long post_id;
}
