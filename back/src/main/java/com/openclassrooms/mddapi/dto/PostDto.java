package com.openclassrooms.mddapi.dto;

import com.openclassrooms.mddapi.models.Subject;
import com.openclassrooms.mddapi.models.User;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.List;

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

    private LocalDateTime createdAt;

    //Retourne le user auteur du post
    private String user_name;

    private String subject_title;
}
