'use client'

import { Template, ImageCard } from '@/componentes';
import { Image } from '@/resources/image/image.resources';
import { useImageService} from '@/resources/image/image.service';
import { Search, ChevronDown, Plus, ImageDown, LoaderCircle } from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';

export default function GaleriaPage() {
  const useService = useMemo(() => useImageService(), []);
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [extension, setExtension] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  
  const searchImagem = useCallback(async () => {
    setLoading(true);
    try {
      const result = await useService.buscar(query, extension);
      setImages(result);
    } catch (error) {
      console.error('Não foi possível carregar as imagens.', error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  }, [extension, query, useService]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void searchImagem();
    }, 300);

    return () => window.clearTimeout(timeout);
  }, [searchImagem]);

  function formatSize(size?: number) {
    if (size === undefined || size === null || Number.isNaN(size)) return undefined;
    const unit = size >= 1024 * 1024 ? 'MB' : 'KB';
    const value = unit === 'MB' ? size / (1024 * 1024) : size / 1024;
    return `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 1 }).format(value)} ${unit}`;
  }

  function formatDate(date?: string) {
    if (!date) return undefined;
    const parts = date.split('-').map(Number);
    if (parts.length !== 3 || parts.some(Number.isNaN)) return date;
    const [year, month, day] = parts;
    return new Intl.DateTimeFormat('pt-BR').format(new Date(year, month - 1, day));
  }

  function renderImageCard(image: Image){
    return (
      <ImageCard key={image.url}
                 nome={image.name}
                 src={image.url}
                 tamanho={formatSize(image.size)}
                 dataUpload={formatDate(image.uploadData)}
                 extension={image.extension}/>
    )
  }

  function renderImageCards(){
    //return images.map(image => renderImageCard(image));
    return images.map(renderImageCard);
  }

  return (
    <Template>
  <main className="mx-auto w-full max-w-[1600px] pb-12 pt-5 sm:pt-8 px-4">
    
    {/* Seção de Filtros e Botões Alinhados */}
    <section className="flex flex-wrap items-center gap-4 my-5 mb-14">
      
      {/* Campo de Busca */}
      <div className="relative flex items-center w-full max-w-md">
        <span className="absolute left-4 text-gray-400">
          <Search size={18} strokeWidth={1.5} />
        </span>
        <input 
          type="text" 
          placeholder="Buscar por nome ou pela palavra chave" 
          onChange={event => setQuery(event.target.value)}
          className="w-full border border-gray-400 bg-transparent py-2.5 pl-12 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-gray-600"
        />
      </div>

      {/* Select de Formatos */}
      <div className="relative flex items-center w-full sm:w-56">
        <span className="absolute left-4 text-gray-400 pointer-events-none">
          <ChevronDown size={18} strokeWidth={1.5} />
        </span>
        <select 
          onChange={event => setExtension(event.target.value)} 
          className="w-full border border-gray-400 bg-transparent py-2.5 pl-12 pr-4 text-sm text-gray-600 outline-none appearance-none cursor-pointer focus:border-gray-600"
        >
          <option value="">Todos os formatos</option>
          <option value="PNG">PNG</option>
          <option value="JPEG">JPEG</option>
          <option value="GIF">GIF</option>
        </select>
      </div>

      {/* Botão de Buscar (Executa a função searchImagem) */}
      <button 
        onClick={searchImagem}
        type="button"
        className="flex items-center justify-center gap-2 border border-gray-400 bg-transparent py-2.5 px-6 text-sm text-gray-600 transition hover:border-gray-600 hover:text-gray-800 w-full sm:w-auto cursor-pointer"
      >
        <ImageDown size={18} strokeWidth={1.5} />
        Buscar
      </button>

      {/* Botão Add New */}
      <button className="flex items-center justify-center gap-2 border border-gray-400 bg-transparent py-2.5 px-6 text-sm text-gray-600 transition hover:border-gray-600 hover:text-gray-800 w-full sm:w-auto cursor-pointer">
        <Plus size={18} strokeWidth={1.5} />
        Add New
      </button>
    </section>

    {/* Título da Galeria */}
    <div className="mb-8 flex flex-wrap items-end justify-between gap-5 sm:mb-10">
      <h1 className="font-title text-5xl font-normal uppercase leading-none tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
        Sua galeria
      </h1>
    </div>

    {/* Grade de Imagens */}
    <section aria-label="Imagens da galeria" aria-busy={loading} className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
      {loading ? (
        <div className="col-span-full flex items-center justify-center gap-3 py-12 text-gray-600" role="status">
          <LoaderCircle className="animate-spin" size={20} />
          <span>Carregando imagens...</span>
        </div>
      ) : images.length > 0 ? renderImageCards() : (
        <p className="col-span-full py-12 text-center text-gray-500" role="status">
          Nenhuma imagem encontrada.
        </p>
      )}
    </section>
  </main>
</Template>

  );
}
