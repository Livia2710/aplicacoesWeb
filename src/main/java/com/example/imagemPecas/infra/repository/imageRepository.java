package com.example.imagemPecas.infra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.imagemPecas.domain.entity.Image;


public interface imageRepository extends JpaRepository<Image, String> {
}
