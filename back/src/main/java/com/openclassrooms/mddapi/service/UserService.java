package com.openclassrooms.mddapi.service;

import com.openclassrooms.mddapi.dto.UserDto;
import com.openclassrooms.mddapi.models.User;
import com.openclassrooms.mddapi.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User updateUser(UserDto userDto) {
        //Récupérer le user à mettre à jour par son Id
        User userFound = userRepository.findById(userDto.getId()).orElse(null);
        //Mettre à jour les données
        if (userFound != null) {
            userFound.setName(userDto.getName());
            userFound.setEmail(userDto.getEmail());
            //Mettre à jour en BDD et Retourner le user à jour
            return this.userRepository.save(userFound);
        }
        return null;
    }
}
