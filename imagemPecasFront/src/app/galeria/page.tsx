'use client'

import { Template, ImageCard } from '@/componentes';
import { useState } from 'react';

export default function GaleriaPage() {

  const image1 = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85';
  const image2 = 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=85';

  const nome1 = 'Placa Mãe';
  const nome2 = 'Resistor';

  const [codigoImage, setCodigoImage] = useState<number>(2);
  const [urlImage, setUrlImage] = useState<string>(image2);

  const [nomeImage, setNomeImage] = useState<string>(nome2);

  function mudarImagem(){
    if(codigoImage == 1){
      setCodigoImage(2);
      setUrlImage(image2);
      setNomeImage(nome2);
    }else{
      setCodigoImage(1);
      setUrlImage(image1);
      setNomeImage(nome1);
    }
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
            onClick={mudarImagem}
            type="button"
          >
            Trocar imagem
          </button>
        </div>
        <section aria-label="Imagens da galeria" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2026' src={urlImage}/>
          <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2026' src={urlImage}/>
          <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2026' src={urlImage}/>
          <ImageCard nome={nomeImage} tamanho='10MB' dataUpload='01/01/2026' src={urlImage}/>
        </section>
      </main>
    </Template>
  );
}
