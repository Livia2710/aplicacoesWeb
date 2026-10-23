import React from "react";
import Link from "next/link";

interface TemplateProps {
  children: React.ReactNode
}

export const Template: React.FC<TemplateProps> = (props: TemplateProps) => {
  return (
    <>
    <Header/>

    {props.children}
    
    <Footer/>
    </>
  );
}

const Header: React.FC = () => {
  return (
    <header className="z-50 h-20 w-full header-fixed backdrop-blur-md text-bege-escuro shadow-header px-6 md:px-12 flex items-center justify-between">
      <div>
        <Link 
        href="/" 
        className="text-xl font-extralight uppercase tracking-[0.25em] hover:opacity-80 transition-opacity"
      >
        IMAGEM PEÇAS
      </Link>

    </div>
    </header>
  )
}

const Footer: React.FC = () => {
  return (
    <footer>
      <p className="mt-10 text-center text-sm">@ 2026 Imagem Peças. Todos os direitos reservados a Lívia</p>
    </footer>
  )
}