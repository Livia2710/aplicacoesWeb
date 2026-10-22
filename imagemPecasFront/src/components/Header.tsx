"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, X, Sparkles, Home, Users, Menu, BookOpen, Feather, Compass, Wand, Eye, Backpack, LogOut  } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 
  return (
    <>
      <header className="relative z-50 h-20 overflow-visible rounded-[10px] bg-roxo-escuro text-bege-escuro shadow-header">
          <nav className="hidden md:flex items-center gap-14">
            <Link href="/" className="font-title text-lg uppercase tracking-[0.18em] hover:opacity-80 transition-opacity">
              Home
            </Link>
            <Link href="/personagens" className="font-title text-lg uppercase tracking-[0.18em] hover:opacity-80 transition-opacity">
              Personagens
            </Link>
            <Link href="/habilidades" className="font-title text-lg uppercase tracking-[0.18em] hover:opacity-80 transition-opacity">
              Habilidades
            </Link>
            <Link href="/mapas" className="font-title text-lg uppercase tracking-[0.18em] hover:opacity-80 transition-opacity">Mapas</Link>
            <Link href="/atlas" className="font-title text-lg uppercase tracking-[0.18em] hover:opacity-80 transition-opacity">Atlas</Link>
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setIsSidebarOpen((current) => !current)}
              className="flex items-center gap-3 font-title text-[24px] leading-[1.1] tracking-wider cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="hidden md:inline">{username}</span>
              <div className="hidden md:block">
                <ChevronDown size={22} strokeWidth={1.5} className={`transition-transform duration-200 ${isSidebarOpen ? 'rotate-180' : ''}`} />
              </div>
              <div className="block md:hidden p-1 hover:bg-bege-escuro/10 rounded">
                <Menu size={28} strokeWidth={1.5} />
              </div>
            </button>
            
          </div>
        </div>
      </header>

