package com.openclassrooms.mddapi.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
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

    private List<Long> users;
}
