'use client'

import { Template, ImageCard } from '@/componentes';
import { Image } from '@/resources/image/image.resources';
import { useImageService} from '@/resources/image/image.service';
import { Search, ChevronDown, Plus } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function GaleriaPage() {
  const useService = useImageService();
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [searchFocused, setSearchFocused] = useState<boolean>(false);
  
  async function searchImagem(searchQuery: string = query, searchExtension: string = extension){
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const result = await useService.buscar(searchQuery, searchExtension);
      setImages(result);
    } finally {
      setLoading(false);
    }
  }

  function renderImageCard(image: Image){
    return (
      <ImageCard key={image.url}
                 nome={image.name}
                 src={image.url}
                 tamanho={image.size}
                 dataUpload={image.uploadData}
                 extension={image.extension}/>
    )
  }

  function renderImageCards(){
    //return images.map(image => renderImageCard(image));
    return images.map(renderImageCard);
  }

  return (
    <Template loading={loading}>
  <main className="mx-auto w-full max-w-[1600px] pb-12 pt-5 sm:pt-8 px-4">
    
    {/* Seção de Filtros e Botões Alinhados */}
    <section className="flex flex-wrap items-center gap-4 my-5 mb-14">
      
      {/* Campo de Busca */}
      <div className="relative flex items-center w-full max-w-md">
        <span className="absolute left-4 text-foreground/50">
          <Search size={18} strokeWidth={1.5} />
        </span>
        <input 
          type="text" 
          placeholder={searchFocused || query ? "" : "Buscar por nome ou pela palavra chave"}
          onFocus={() => setSearchFocused(true)}
          onBlur={() => setSearchFocused(false)}
          onChange={event => setQuery(event.target.value)}
          className="w-full border border-foreground/30 bg-transparent py-2.5 pl-12 pr-4 text-sm text-foreground/80 placeholder:text-foreground/45 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
        />
      </div>

      {/* Select de Formatos */}
      <div className="relative flex items-center w-full sm:w-56">
        <span className="pointer-events-none absolute left-4 text-foreground/50">
          <ChevronDown size={18} strokeWidth={1.5} />
        </span>
        <select 
          onChange={event => {
            const selectedExtension = event.target.value;
            setExtension(selectedExtension);
            void searchImagem(query, selectedExtension);
          }}
          style={{ colorScheme: 'light dark' }}
          className="w-full cursor-pointer appearance-none border border-foreground/30 bg-transparent py-2.5 pl-12 pr-4 text-sm text-foreground/80 outline-none transition focus:border-accent focus:ring-1 focus:ring-accent"
        >
          <option className="bg-background text-foreground" value="">Todos os formatos</option>
          <option className="bg-background text-foreground" value="PNG">PNG</option>
          <option className="bg-background text-foreground" value="JPG">JPEG</option>
          <option className="bg-background text-foreground" value="GIF">GIF</option>
        </select>
      </div>

      {/* Botão de busca*/}
      <button
        onClick={searchImagem}
        type="button"
        className="flex w-full cursor-pointer items-center justify-center gap-2 rounded border border-transparent bg-accent px-6 py-2.5 text-sm font-medium uppercase tracking-[0.12em] text-black shadow-sm transition hover:border-accent hover:bg-transparent hover:text-accent hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"
      >
        <Search size={18} strokeWidth={1.8} />
        BUSCAR
      </button>

      {/* Botão Add New */}
      <Link href="/formulario" >
      <button className="flex w-full cursor-pointer items-center justify-center gap-2 border border-foreground/30 bg-transparent px-6 py-2.5 text-sm text-foreground/75 transition hover:border-accent hover:text-accent sm:w-auto">
        <Plus size={18} strokeWidth={1.5} />
        Add New
      </button>
      </Link>
    </section>

    {/* Título da Galeria */}
    <div className="mb-8 flex flex-wrap items-end justify-between gap-5 sm:mb-10">
      <h1 className="font-title text-5xl font-normal uppercase leading-none tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
        Sua galeria
      </h1>
    </div>

    {/* Grade de Imagens */}
    <section aria-label="Imagens da galeria" className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
      {renderImageCards()}
    </section>
  </main>
</Template>

  );
}
