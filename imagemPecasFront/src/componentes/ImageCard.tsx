interface ImageCardProps {
  nome?: string;
  tamanho?: number;
  dataUpload?: string;
  src?: string;
  extension?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ nome, dataUpload, src, tamanho, extension }: ImageCardProps) => {
  function dowload(){
    window.open(src, '_blank');
  }
  return (
    <article className="group relative isolate aspect-[4/3] overflow-hidden rounded-sm bg-neutral-200 shadow-sm ring-1 ring-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-neutral-800 dark:ring-white/10">
      <img
        onClick={dowload}
        src={src}
        className="absolute inset-0 h-full w-full cursor-pointer object-cover transition-transform duration-700 group-hover:scale-105"
        alt={nome ? `Imagem de ${nome}` : 'Imagem da galeria'}
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
        <h2 className="font-body text-lg font-light tracking-wide sm:text-xl">{nome}</h2>
        <div className="mt-3 flex flex-wrap gap-2 text-xs tracking-[0.12em] text-white/85">
          {tamanho && <span className="border border-white/50 px-2 py-1">{formatBytes(tamanho,2)}</span>}
          {dataUpload && <span className="border border-white/50 px-2 py-1">{dataUpload}</span>}
          {extension && <span className="border border-white/50 px-2 py-1">{extension}</span>}
        </div>
      </div>
    </article>
  );
}

function formatBytes(bytes: number = 0,  decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}
