"use client"

import Image from "next/image";
import logoComNome from "@/assets/imgs/logoComNome.png";
import { useRouter } from "next/navigation";

function Home() {
  const router = useRouter();

  // Funções de redirecionamento
  const redirectSite = () => {
    router.push("/site");
  };

  const redirectLoja = () => {
    router.push("/loja");
  };

  const redirectSistema = () => {
    router.push("/sistema");
  };

  return (
    <main className="min-h-screen bg-blue-500 flex flex-col gap-10 justify-center items-center">
      {/* Logo */}
      <div className="flex justify-center items-center">
        <Image src={logoComNome} alt="Logo com Nome" width={200} height={100} priority />
      </div>

      {/* Botões */}
      <div className="flex flex-col gap-4 w-full px-6 sm:w-2/3 md:w-1/3 mb-32">
        <button
          onClick={redirectSite}
          className="bg-white rounded py-4 font-semibold text-gray-600 text-lg hover:scale-105 transition-transform duration-200 shadow-md"
        >
          SITE
        </button>
        <button
          onClick={redirectLoja}
          className="bg-white rounded py-4 font-semibold text-gray-600 text-lg hover:scale-105 transition-transform duration-200 shadow-md"
        >
          LOJA
        </button>
        <button
          onClick={redirectSistema}
          className="bg-white rounded py-4 font-semibold text-gray-600 text-lg hover:scale-105 transition-transform duration-200 shadow-md"
        >
          SISTEMA DE GESTÃO
        </button>
      </div>

      {/* Rodapé */}
      <footer className="absolute bottom-4 text-center">
        <p className="text-white font-thin text-sm">
          Todos os direitos reservados &copy; 2024 - Igreja Evangélica Deus é
          Espírito
        </p>
      </footer>
    </main>
  );
}

export default Home;
