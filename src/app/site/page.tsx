"use client";

import Image from "next/image";

//imgs
import heroImage from "@/assets/imgs/igreja.jpeg";
import aboutImage from "@/assets/imgs/banner.jpg";
import eventImage from "@/assets/imgs/banner.jpg";
import logoComNome from "@/assets/imgs/logoComNome.png";

//icons
import { ArrowDownward } from "@mui/icons-material";

export default function LandingPage() {
  
  const redirectMaps = () => {
    window.open(
      "https://www.google.com/maps/@-8.1423032,-34.935823,3a,75y,139.44h,81.7t/data=!3m7!1e1!3m5!1sjY9rxcFk3wMmYGYercfjYQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D8.297538822626109%26panoid%3DjY9rxcFk3wMmYGYercfjYQ%26yaw%3D139.4422439206295!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main>
      {/* Header */}
      <header className="bg-blue-600 text-white fixed w-full z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <Image
            src={logoComNome}
            alt="Logo da Igreja"
            width={100}
            height={100}
            className="object-contain"
          />

          <nav className="flex gap-6">
            <a href="#about" className="hover:underline">
              Sobre Nós
            </a>
            <a href="#events" className="hover:underline">
              Eventos
            </a>
            <a href="#contact" className="hover:underline">
              Contato
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center relative flex justify-center items-center text-center text-white"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>

        {/* Logo */}
        <div className="absolute top-52">
          <Image
            src={logoComNome}
            alt="Logo da Igreja"
            width={200}
            height={100}
          />
        </div>

        <div className="z-10 p-8 rounded">
          <h1 className="text-5xl font-bold transition-transform transform hover:scale-105">
            Igreja Evangélica Deus é Espírito
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Venha experimentar o poder transformador do Espírito Santo em sua
            vida.
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              onClick={redirectMaps}
              className="mt-6 bg-white text-blue-800 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition-colors"
            >
              Junte-se a Nós
            </button>
          </a>
        </div>

        {/* Scroll Down Icon */}
        <div className="absolute bottom-10 animate-bounce">
          <a href="#about">
            <ArrowDownward className="w-10 h-10 text-white" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <Image
            src={aboutImage}
            alt="Sobre Nós"
            width={500}
            height={350}
            className="rounded shadow-md"
          />
          <div>
            <h2 className="text-3xl font-bold">Sobre Nós</h2>
            <p className="mt-4 text-gray-700">
              Somos uma comunidade de fé comprometida em viver e compartilhar o
              amor de Deus. Nossa missão é levar o evangelho a todos e promover
              transformação espiritual.
            </p>
            <p className="mt-4 text-gray-700">
              Venha participar de nossos cultos e experimente a presença de Deus
              em sua vida.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Próximos Eventos</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((event, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow"
              >
                <Image
                  src={eventImage}
                  alt="Evento"
                  width={500}
                  height={300}
                  className="w-full"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">Culto de Louvor</h3>
                  <p className="text-gray-600 mt-2">Data: 15 de Janeiro</p>
                  <p className="text-gray-600">Horário: 19h</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Entre em Contato</h2>
          <form className="mt-10 max-w-2xl mx-auto grid gap-4">
            <input
              type="text"
              placeholder="Seu Nome"
              className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Seu Email"
              className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Sua Mensagem"
              rows="4"
              className="border rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-800 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>
            &copy; 2024 Igreja Evangélica Deus é Espírito. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
