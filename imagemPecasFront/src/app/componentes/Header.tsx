"use client";

import Link from "next/link";

export function Header() {
  return (
    <header className="z-50 h-20 w-full header-fixed backdrop-blur-md text-bege-escuro shadow-header px-6 md:px-12 flex items-center justify-between">
      
      {/* Extremo Esquerdo: Logo / Home */}
      <Link 
        href="/" 
        className="text-xl font-extralight uppercase tracking-[0.25em] hover:opacity-80 transition-opacity"
      >
        LOGO
      </Link>

      {/* Extremo Direito: Dois botões simples */}
      <div className="flex items-center gap-6">
        <button 
          type="button"
          className="font-title text-base uppercase tracking-[0.12em] hover:opacity-80 transition-opacity cursor-pointer"
        >
          PUBLICAR IMAGEM
        </button>
        <button 
          type="button"
          className="font-title text-base uppercase tracking-[0.12em] bg-accent text-black px-4 py-2 rounded font-medium hover:bg transition cursor-pointer"
        >
          SAIR
        </button>
      </div>

    </header>
  );
}
