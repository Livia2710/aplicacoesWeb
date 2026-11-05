interface ImageCardProps {
  nome?: string;
  tamanho?: string;
  dataUpload?: string;
  src?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ nome, dataUpload, src, tamanho }: ImageCardProps) => {
  return (
    <article className="group relative isolate aspect-[4/3] overflow-hidden rounded-sm bg-neutral-200 shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-800 dark:ring-white/10">
      <img
        src={src || 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85'}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        alt={nome ? `Imagem de ${nome}` : 'Imagem da galeria'}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <h2 className="font-body text-lg font-light tracking-wide sm:text-xl">{nome}</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-xs tracking-[0.12em] text-white/85">
          {tamanho && <span className="border border-white/50 px-2 py-1">{tamanho}</span>}
          {dataUpload && <span className="border border-white/50 px-2 py-1">{dataUpload}</span>}
        </div>
      </div>
    </article>
  );
}
