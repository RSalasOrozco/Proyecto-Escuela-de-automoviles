"use client";

import Image from "next/image";
import React from "react";

function Cursos() {
  const categories = [
    {
      code: "A1",
      type: "Motocicletas",
      image: "/A11.jpg",
      description:
        "Motocicletas de hasta 125 c.c. para conductores desde 16 años",
      details: {
        edadMinima: "16 años",
        vehiculos: "Motocicletas hasta 125cc, Mototriciclos, Cuatrimotos",
        requisitos: [
          "Cédula de ciudadanía",
          "Examen médico",
          "Examen teórico-práctico"
        ],
        vigencia: "10 años",
        costoAproximado: "$150.000 - $300.000"
      }
    },
    {
      code: "A2",
      type: "Motocicletas",
      image: "/A1.jpg",
      description:
        "Motocicletas de más de 125 c.c. para conductores desde 18 años",
      details: {
        edadMinima: "18 años",
        vehiculos: "Motocicletas mayores a 125cc, Mototriciclos, Cuatrimotos",
        requisitos: [
          "Cédula de ciudadanía",
          "Examen médico",
          "Examen teórico-práctico"
        ],
        vigencia: "10 años",
        costoAproximado: "$200.000 - $400.000"
      }
    },
    {
      code: "B1",
      type: "Particular",
      image: "/A1.jpg",
      description:
        "Automóviles, camperos, camionetas y furgonetas hasta 9 pasajeros",
      details: {
        edadMinima: "18 años",
        vehiculos:
          "Automóviles, Camperos, Camionetas, Furgonetas hasta 9 pasajeros",
        requisitos: [
          "Cédula de ciudadanía",
          "Examen médico",
          "Examen teórico",
          "Examen práctico"
        ],
        vigencia: "10 años",
        costoAproximado: "$300.000 - $600.000"
      }
    },
    {
      code: "B2",
      type: "Carga Particular",
      image: "/C1.jpg",
      description: "Vehículos de servicio particular para labores de carga",
      details: {
        edadMinima: "18 años",
        vehiculos:
          "Camionetas de carga, Pickups, Vehículos de carga particular",
        requisitos: [
          "Cédula de ciudadanía",
          "Examen médico",
          "Examen teórico-práctico"
        ],
        vigencia: "10 años",
        costoAproximado: "$350.000 - $650.000"
      }
    },
    {
      code: "C1",
      type: "Carga Pesada",
      image: "/C1.jpg",
      description: "Camiones rígidos de dos ejes con peso superior a 3.500 kg",
      details: {
        edadMinima: "18 años",
        vehiculos:
          "Camiones rígidos 2 ejes, Volquetas rígidas, Camiones de reparto",
        requisitos: [
          "Cédula de ciudadanía",
          "Examen médico especial",
          "Certificado de aptitud física",
          "Examen teórico-práctico especializado"
        ],
        vigencia: "3 años",
        costoAproximado: "$500.000 - $800.000"
      }
    },
    {
      code: "C2",
      type: "Carga Pesada",
      image: "/c2.jpg",
      description: "Camiones rígidos de tres o más ejes para transporte pesado",
      details: {
        edadMinima: "18 años",
        vehiculos:
          "Camiones rígidos múltiples ejes, Transporte pesado de mercancías",
        requisitos: [
          "Cédula de ciudadanía",
          "Examen médico especial",
          "Certificado de aptitud física",
          "Examen teórico-práctico especializado"
        ],
        vigencia: "3 años",
        costoAproximado: "$600.000 - $900.000"
      }
    },
    {
      code: "D1",
      type: "Público",
      image: "/D1.jpg",
      description: "Vehículos para servicio público hasta 9 pasajeros (Taxis)",
      details: {
        edadMinima: "18 años",
        vehiculos: "Taxis, Vehículos de servicio público hasta 9 pasajeros",
        requisitos: [
          "Cédula de ciudadanía",
          "Examen médico",
          "Certificado de antecedentes",
          "Curso especial de servicio público"
        ],
        vigencia: "3 años",
        costoAproximado: "$400.000 - $700.000"
      }
    },
    {
      code: "D2",
      type: "Público",
      image: "/D1.jpg",
      description:
        "Vehículos para servicio público de 10 a 30 pasajeros (Busetas)",
      details: {
        edadMinima: "18 años",
        vehiculos: "Busetas, Microbuses, Transporte intermunicipal",
        requisitos: [
          "Cédula de ciudadanía",
          "Examen médico",
          "Certificado de antecedentes",
          "Curso especial de servicio público"
        ],
        vigencia: "3 años",
        costoAproximado: "$500.000 - $800.000"
      }
    }
  ];

  const phoneNumber = "573001234567"; // Reemplaza con tu número
  const whatsappMessage =
    "Hola, me gustaría obtener información sobre la licencia: ";

  const handleWhatsAppClick = (licenseCode: string) => {
    const message = `${whatsappMessage}${licenseCode}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleCotizarClick = (licenseCode: string) => {
    // Aquí puedes redirigir a un formulario de cotización o abrir modal
    alert(`Próximamente podrás cotizar la licencia ${licenseCode}`);
    // O redirigir a formulario: window.location.href = `/cotizar?licencia=${licenseCode}`;
  };

  return (
    <div className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">
            Todas Nuestras Licencias
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre todas las categorías de licencias de conducción
            disponibles. Cada licencia tiene requisitos específicos diseñados
            para garantizar tu seguridad y la de los demás.
          </p>
        </div>

        {/* Grid de Licencias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  alt={`Licencia ${category.code}`}
                  src={category.image}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {category.code}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                {/* Header */}
                <div className="mb-4">
                  <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {category.type}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mt-2">
                    Licencia {category.code}
                  </h3>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Detalles */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold text-gray-900 w-24">
                      Edad mínima:
                    </span>
                    <span>{category.details.edadMinima}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="font-semibold text-gray-900 w-24">
                      Vigencia:
                    </span>
                    <span>{category.details.vigencia}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">
                      Vehículos:
                    </span>
                    <p className="mt-1">{category.details.vehiculos}</p>
                  </div>
                  <div className="text-sm">
                    <span className="font-semibold text-gray-900">
                      Costo aproximado:
                    </span>
                    <p className="text-green-600 font-semibold mt-1">
                      {category.details.costoAproximado}
                    </p>
                  </div>
                </div>

                {/* Requisitos */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Requisitos principales:
                  </h4>
                  <ul className="space-y-1">
                    {category.details.requisitos
                      .slice(0, 3)
                      .map((requisito, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-green-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {requisito}
                        </li>
                      ))}
                  </ul>
                </div>

                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleWhatsAppClick(category.code)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
                    </svg>
                    WhatsApp
                  </button>

                  <button
                    onClick={() => handleCotizarClick(category.code)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300"
                  >
                    Cotizar Ahora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Contáctanos y te asesoraremos sobre la licencia perfecta para ti
          </p>
          <button
            onClick={() => handleWhatsAppClick("General")}
            className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
            </svg>
            Contactar por WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cursos;
