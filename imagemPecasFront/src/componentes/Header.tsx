"use client";

import Link from "next/link";
import { LogOut, ImageUp } from "lucide-react";

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
            className="group flex items-center gap-2 font-extralight text-base uppercase tracking-[0.25em] bg-transparent px-4 py-2 rounded border border-black/45 dark:border-white/45 text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-200 cursor-pointer"
        >
            {/* O ícone agora reage ao hover do botão usando group-hover */}
            <ImageUp className="text-black/45 dark:text-white/45 group-hover:text-white dark:group-hover:text-black transition-colors duration-200" size={20}/>
            <span className="hidden md:block">PUBLICAR IMAGEM</span>
        </button>

        <button 
            type="button" 
            className="flex items-center gap-2 px-4 py-2 bg-accent text-black text-base uppercase tracking-[0.12em] rounded border border-transparent hover:bg-transparent hover:border-accent hover:text-accent transition cursor-pointer"
        >
            <LogOut size={20}/>
            <span className="hidden md:block">SAIR</span>
        </button>
        </div>


    </header>
  );
}
