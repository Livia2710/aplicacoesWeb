package com.example.imagemPecas.infra.repository.specs;

import com.example.imagemPecas.domain.entity.Image;
import com.example.imagemPecas.domain.enums.ImageExtension;
import org.springframework.data.jpa.domain.Specification;

public class GenericSpecs {
    private GenericSpecs(){}

    public static <T>Specification<T> conjunction(){
        return (root, query, criteriaBuilder) -> criteriaBuilder.conjunction();
    }

}
