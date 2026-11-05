'use client'

import { Template, ImageCard } from '@/componentes';
import { Image } from '@/resources/image/image.resources';
import { useImageService} from '@/resources/image/image.service';
import { useState } from 'react';

export default function GaleriaPage() {
  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  
  async function searchImagem(){
    const result = await useService.buscar();
    setImages(result);
    console.table(result);
  }

  function renderImageCard(image: Image){
    return (
      <ImageCard key={image.url}
                 nome={image.name}
                 src={image.url}
                 tamanho={image.size}
                 dataUpload={image.uploadDate}/>
    )
  }

  function renderImageCards(){
    //return images.map(image => renderImageCard(image));
    return images.map(renderImageCard);
  }

  return (
    <Template>
      <main className="mx-auto w-full max-w-[1600px] pb-12 pt-5 sm:pt-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5 sm:mb-10">
          <h1 className="font-title text-5xl font-normal uppercase leading-none tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
            Sua galeria
          </h1>
          <button
            className="border border-foreground/30 px-4 py-2 text-xs uppercase tracking-[0.16em] text-foreground transition hover:border-accent hover:text-accent"
            onClick={searchImagem}
            type="button"
          >
            Clique aqui para Mudar
          </button>
        </div>
        <section aria-label="Imagens da galeria" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {
            renderImageCards()
          }
  
        </section>
      </main>
    </Template>
  );
}
