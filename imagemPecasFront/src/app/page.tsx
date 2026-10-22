import Link from "next/link"; 

export default function Home() {
  return (
    <main className="w-full max-w-3xl p-32 bg-white dark:bg-black sm:items-start flex flex-col gap-6">

      <h1 className="font-title text-3xl font-semibold text-black dark:text-zinc-50">
        Minha pagina no React
      </h1>

    
      <Link 
        href="/galeria" 
        className="inline-block px-6 py-3 rounded-lg font-medium text-black dark:text-black bg-accent hover:opacity-90 transition-opacity text-center"
      >
        Ir para a Galeria
      </Link>
           
    </main>
  );
}
