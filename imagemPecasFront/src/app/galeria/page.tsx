import { Header } from "@/app/componentes/Header";
import { PrimeiroComponente } from "../componentes/PrimeiroComponente";

export default function GaleriaPage() {
  return (
    <>
    <Header/>
      <main className="w-full max-w-3xl p-32 bg-white dark:bg-black sm:items-start">
          <h1 className="font-title text-3xl font-semibold text-black dark:text-zinc-50">
            Minha pagina de <span className="text-accent">Galeria</span>
          </h1>
      </main>
      <PrimeiroComponente/>
      </>
  );
}
