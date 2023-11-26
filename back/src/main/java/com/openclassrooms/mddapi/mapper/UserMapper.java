package com.openclassrooms.mddapi.mapper;


import com.openclassrooms.mddapi.dto.UserDto;
import com.openclassrooms.mddapi.models.User;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
//TODO : supprimer les  uses = {} ?
@Mapper(componentModel = "spring", uses = {}, imports = {Arrays.class, Collectors.class, User.class, Collections.class, Optional.class})
public interface UserMapper extends EntityMapperToDto<UserDto, User> {


}
