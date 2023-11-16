"use client";

import Image from "next/image";
import { useEffect } from "react";
import { client } from "react";

export default function Home() {
  useEffect(() => {
    const animacion = bodymovin.loadAnimation({
      container: document.getElementById("music_animate"),
      path: "/json/music_animation.json",
      renderer: "svg",
      loop: true,
      autoplay: true,
      name: "demo", // Utiliza la variable que contiene la animación JSON
      animationSpeed: 0.5,
    });

    return () => {
      animacion.destroy();
    };
  });

  return (
    <main>
      {/*NAVBAR*/}
      <section>
        <nav class="bg-white border-gray-200 p-1 ">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="self-center text-2xl font-semibold whitespace-nowrap">
                Logo
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
              <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Iniciar session
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                  >
                    Registrate
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/*CONTENIDO*/}
      <section className="flex font-poppins bg-blancoraro-500">
        <div className="w-2/3 p-5">
          {/* Imagen como fondo */}
          <Image
            className="absolute z-0 "
            src="/img/font_waka.png"
            alt="Imagen de fondo"
            width={500}
            height={500}
          />
          {/* Texto centrado */}
          <div className="relative flex items-center justify-start text-texto-900 z-10">
            <p className="text-left font-bold text-6xl">
              ¡Prepárate para vivir una{" "}
              <span className="text-morado-500">experiencia</span> musical
              inolvidable!
            </p>
          </div>

          <p className=" relative text-sm w-52">
            Sumérgete en el mundo de la música en nuestro evento épico.{" "}
            <span className="text-morado-500"> ¡No te lo pierdas!</span>
          </p>

        <div className="relative flex w-2/3 mt-5 bg-azul-100 gap-16 p-5 rounded-lg justify-center">
            <div className="text-center">
              <p>Cupos Totales</p>
              <p className="font-bold">60</p>
            </div>

            <div className="text-center">
              <p>Cupos Totales</p>
              <p className="font-bold">60</p>
            </div>

            <div className="text-center">
              <p>Cupos Totales</p>
              <p className="font-bold">60</p>
            </div>
          </div>
        </div>

        <div className="flex w-auto items-center justify-center">

          <div id="music_animate" className="w-96 flex  mt-5"></div>
           
        </div>

        <div className="fixed bottom-0 w-full bg-azul-100 justify-end">
        <Image 
         src="/img/musica.png"
         width={1500}
         height={1000}
        />
        </div>
      </section>
    </main>
  );
}
