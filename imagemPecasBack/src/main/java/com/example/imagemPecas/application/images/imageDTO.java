package com.example.imagemPecas.application.images;

import com.fasterxml.jackson.annotation.JsonFormat;
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
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate uploadData;
}
