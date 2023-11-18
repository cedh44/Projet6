package com.openclassrooms.mddapi.mapper;

import java.util.List;

public interface EntityMapperToDto<D, E> {

    D toDto(E entity);

    List<D> toDto(List<E> entityList);
}
