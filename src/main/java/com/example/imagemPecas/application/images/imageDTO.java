package com.example.imagemPecas.application.images;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDate;

@Data
@Builder
public class imageDTO {
    private String url;
    private String name;
    private String extension;
    private long size;
    private LocalDate uploadData;



}
