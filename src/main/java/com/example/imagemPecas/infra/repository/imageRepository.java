package com.example.imagemPecas.infra.repository;

import com.example.imagemPecas.domain.enums.ImageExtension;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.imagemPecas.domain.entity.Image;
import org.springframework.util.StringUtils;

import java.util.List;


public interface imageRepository extends JpaRepository<Image, String> {

    default List<Image> findByExtensionAndNameOrTagsLike(ImageExtension extension, String query){
        //SELECT * FROM IMAGE WHERE 1 = 1
        Specification<Image> conjuction = (root, query1, criteriaBuilder) -> criteriaBuilder.conjunction();
        Specification<Image> spec = Specification.where(conjuction);

        if(extension != null) {
            //AND EXTENSION = 'PNG'
            Specification<Image> extensionEqual = (root, query1, cb) -> cb.equal(root.get("extension"), extension);
            spec =  spec.and(extensionEqual);

        }

        if(StringUtils.hasText(query)) {
            //AND EXTENSION = 'PNG'
            Specification<Image> nameLike = (root, query1, cb) -> cb.like(cb.upper(root.get("name")), "%" + query.toLowerCase() + " %");
            Specification<Image> tagsLike = (root, query1, cb) -> cb.like(cb.upper(root.get("tags")), "%" + query.toLowerCase() + " %");

            Specification<Image> nameOrTagsLike = Specification.anyOf(nameLike, tagsLike);
            spec =  spec.and(nameOrTagsLike);

        }
        
        return findAll(spec);

    }
}
