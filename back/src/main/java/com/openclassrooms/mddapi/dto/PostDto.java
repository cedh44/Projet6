package com.openclassrooms.mddapi.dto;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter //Lombok pour getter et setter en auto
@Setter
public class PostDto {
    private Long id;

    @NotBlank
    @Size(max = 50)
    private String title;

    private String content;

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    //Retourne le user auteur du post
    private Long user_id;
    private String user_name;

    private Long subject_id;
    private String subject_title;
}
