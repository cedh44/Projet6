package com.openclassrooms.mddapi.mapper;

import java.util.List;

public interface EntityMapperToEntity<D, E> {

    E toEntity(D dto);

    List<E> toEntity(List<D> dtoList);
}
