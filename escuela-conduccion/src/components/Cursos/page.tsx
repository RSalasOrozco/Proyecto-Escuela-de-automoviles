"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function Cursos() {
  const categories = [
    {
      code: "A1",
      type: "Motocicletas",
      image: "/A11.jpg",
      description:
        "Motocicletas de hasta 125 c.c. para conductores desde 16 años"
    },
    {
      code: "A2",
      type: "Motocicletas",
      image: "/A1.jpg",
      description:
        "Motocicletas de más de 125 c.c. para conductores desde 18 años"
    },
    {
      code: "B1",
      type: "Particular",
      image: "/A1.jpg",
      description:
        "Automóviles, camperos, camionetas y furgonetas hasta 9 pasajeros"
    },
    {
      code: "B2",
      type: "Carga Particular",
      image: "/C1.jpg",
      description: "Vehículos de servicio particular para labores de carga"
    },
    {
      code: "C1",
      type: "Carga Pesada",
      image: "/C1.jpg",
      description: "Camiones rígidos de dos ejes con peso superior a 3.500 kg"
    },
    {
      code: "C2",
      type: "Carga Pesada",
      image: "/c2.jpg",
      description: "Camiones rígidos de tres o más ejes para transporte pesado"
    },
    {
      code: "C1-1",
      type: "Carga Pesada",
      image: "/c2.jpg",
      description: "Tractocamiones para transporte de carga articulada"
    },
    {
      code: "D1",
      type: "Público",
      image: "/D1.jpg",
      description: "Vehículos para servicio público hasta 9 pasajeros (Taxis)"
    },
    {
      code: "D2",
      type: "Público",
      image: "/D1.jpg",
      description:
        "Vehículos para servicio público de 10 a 30 pasajeros (Busetas)"
    },
    {
      code: "D3",
      type: "Público",
      image: "/D1.jpg",
      description: "Vehículos para servicio público más de 30 pasajeros (Buses)"
    },
    {
      code: "D4",
      type: "Público",
      image: "/D1.jpg",
      description:
        "Vehículos para servicio especial de pasajeros (Escolares, turismo)"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(4);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= categories.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - itemsToShow : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Removed unused visibleCategories variable

  return (
    <div className="relative bg-white py-10 sm:py-16 lg:py-24">
      <h1 className="text-center mt-12 mb-10 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
        Todas Nuestras Licencias
      </h1>

      {/* Carrusel Container */}
      <div className="relative px-4 sm:px-8 lg:px-16">
        {/* Botón Anterior */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
          aria-label="Licencias anteriores"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Botón Siguiente */}
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300"
          aria-label="Siguientes licencias"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Contenedor del Carrusel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`
            }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 transition-all duration-300"
                style={{ width: `${100 / itemsToShow}%` }}
              >
                <Link
                  href="#"
                  className="group relative block bg-gradient-to-r from-blue-600 to-cyan-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Image
                    alt={`Licencia ${category.code}`}
                    src={category.image}
                    className="w-full h-64 sm:h-72 md:h-80 object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    width={400}
                    height={320}
                  />

                  <div className="relative p-4 sm:p-6">
                    <p className="text-sm uppercase tracking-widest font-bold text-yellow-500">
                      {category.type}
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl mt-2">
                      {category.code}
                    </p>

                    <div className="mt-4 h-20">
                      <div className="transform transition-all duration-300 group-hover:translate-y-0 opacity-100 group-hover:opacity-100">
                        <p className="text-sm text-white leading-tight">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores de Paginación */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({
            length: Math.ceil(categories.length / itemsToShow)
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * itemsToShow)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex >= index * itemsToShow &&
                currentIndex < (index + 1) * itemsToShow
                  ? "bg-pink-500 w-6"
                  : "bg-gray-300"
              }`}
              aria-label={`Ir a página ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Indicador de Desplazamiento para Móvil */}
      <div className="sm:hidden text-center mt-4 text-sm text-gray-600">
        Desliza para ver más licencias
      </div>
    </div>
  );
}

export default Cursos;
