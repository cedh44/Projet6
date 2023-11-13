package com.openclassrooms.mddapi.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.validation.constraints.Email;
import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter //Lombok pour getter et setter en auto
@Setter
public class UserDto {
    private Long id;

    @NonNull
    @Size(max = 255)
    @Email
    private String email;

    @NonNull
    @Size(max = 255)
    private String name;

    @NonNull
    @JsonIgnore //Ignoré dans le json vers le front
    @Size(max = 255)
    private String password;
}
