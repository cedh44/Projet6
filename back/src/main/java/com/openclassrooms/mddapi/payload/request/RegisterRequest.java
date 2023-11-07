package com.openclassrooms.mddapi.payload.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data //Annotation Lombok qui gère getter et setter
public class RegisterRequest {
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String name;

}
