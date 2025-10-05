"use client";

import Image from "next/image";
import React from "react";

function Profesores() {
  const profesores = [
    {
      id: 1,
      nombre: "Carlos Rodríguez",
      especialidad: "Instructor Jefe - Licencias A1, A2, B1",
      experiencia: "15 años de experiencia",
      imagen: "/carlosgonzalez.jpg",
      descripcion:
        "Especialista en formación de conductores principiantes. Certificado por el Ministerio de Transporte con más de 5,000 alumnos formados exitosamente.",
      habilidades: [
        "Conducción Defensiva",
        "Manejo en Ciudad",
        "Parqueo Avanzado",
        "Formación Teórica"
      ],
      certificaciones: [
        "Instructor Certificado MINT",
        "Primeros Auxilios",
        "Conducción Defensiva"
      ]
    },
    {
      id: 2,
      nombre: "María González",
      especialidad: "Instructora - Licencias B1, B2, C1",
      experiencia: "12 años de experiencia",
      imagen: "/MaríaGonzález.jpg",
      descripcion:
        "Especialista en vehículos de carga y transporte particular. Enfoque en seguridad vial y técnicas de conducción eficiente.",
      habilidades: [
        "Manejo de Carga",
        "Rutas Largas",
        "Eco-Conducción",
        "Logística"
      ],
      certificaciones: [
        "Transporte de Carga",
        "Manejo Defensivo",
        "Gestión de Flotas"
      ]
    },
    {
      id: 3,
      nombre: "Javier López",
      especialidad: "Instructor Especializado - Licencias C2, C1-1",
      experiencia: "18 años de experiencia",
      imagen: "/JavierLópez.jpg",
      descripcion:
        "Experto en vehículos pesados y transporte de mercancías. Instructor certificado para formación de conductores profesionales.",
      habilidades: [
        "Vehículos Articulados",
        "Transporte Pesado",
        "Manejo en Carretera",
        "Normativa DOT"
      ],
      certificaciones: [
        "Vehículos Pesados",
        "Transporte Especial",
        "Seguridad en Carretera"
      ]
    },
    {
      id: 4,
      nombre: "Ana Martínez",
      especialidad: "Instructora - Licencias D1, D2, D3, D4",
      experiencia: "10 años de experiencia",
      imagen: "/AnaMartínez.jpg",
      descripcion:
        "Especialista en transporte público y servicio especial. Enfoque en atención al cliente y seguridad de pasajeros.",
      habilidades: [
        "Transporte Público",
        "Manejo de Pasajeros",
        "Rutas Urbanas",
        "Atención al Cliente"
      ],
      certificaciones: [
        "Transporte Público",
        "Primeros Auxilios",
        "Servicio al Cliente"
      ]
    },
    {
      id: 5,
      nombre: "Roberto Silva",
      especialidad: "Instructor Técnico - Todas las Categorías",
      experiencia: "20 años de experiencia",
      imagen: "/RobertoSilva.jpg",
      descripcion:
        "Instructor senior con amplia experiencia en todas las categorías. Especializado en casos complejos y formación avanzada.",
      habilidades: [
        "Todas las Categorías",
        "Formación Avanzada",
        "Evaluación Técnica",
        "Capacitación Corporativa"
      ],
      certificaciones: [
        "Instructor Master",
        "Evaluador Certificado",
        "Formación de Instructores"
      ]
    },
    {
      id: 6,
      nombre: "Laura Hernández",
      especialidad: "Instructora - Licencias A1, A2, B1",
      experiencia: "8 años de experiencia",
      imagen: "/LauraHernández.jpg",
      descripcion:
        "Especialista en formación de nuevos conductores con enfoque en confianza y seguridad. Paciente y dedicada a cada alumno.",
      habilidades: [
        "Conductores Principiantes",
        "Manejo de Estrés",
        "Técnicas de Enseñanza",
        "Evaluación Psicosensométrica"
      ],
      certificaciones: [
        "Psicología del Tránsito",
        "Pedagogía Vial",
        "Conducción Terapéutica"
      ]
    }
  ];

  const phoneNumber = "573001234567"; // Reemplaza con tu número
  const whatsappMessage =
    "Hola, me gustaría obtener información sobre los cursos con los instructores";

  const handleWhatsAppClick = (profesorNombre?: string) => {
    const message = profesorNombre
      ? `${whatsappMessage}, especialmente con ${profesorNombre}`
      : whatsappMessage;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">
            Nuestro Equipo de Instructores
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a nuestro equipo de instructores certificados con amplia
            experiencia en formación vial. Cada uno especializado en diferentes
            categorías para brindarte la mejor educación.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-blue-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">+30</div>
            <div className="text-gray-600">Años de Experiencia Combinada</div>
          </div>
          <div className="bg-cyan-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-cyan-600 mb-2">+5.000</div>
            <div className="text-gray-600">Alumnos Formados</div>
          </div>
          <div className="bg-pink-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
            <div className="text-gray-600">Instructores Certificados</div>
          </div>
          <div className="bg-green-50 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Tasa de Aprobación</div>
          </div>
        </div>

        {/* Grid de Profesores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {profesores.map((profesor) => (
            <div
              key={profesor.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Imagen del Profesor */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  alt={`Instructor ${profesor.nombre}`}
                  src={profesor.imagen}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge de Experiencia */}
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {profesor.experiencia}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                {/* Información Principal */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {profesor.nombre}
                  </h3>
                  <span className="inline-block bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
                    {profesor.especialidad}
                  </span>
                  <p className="text-gray-600 leading-relaxed">
                    {profesor.descripcion}
                  </p>
                </div>

                {/* Habilidades */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Habilidades:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {profesor.habilidades.map((habilidad, index) => (
                      <span
                        key={index}
                        className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs font-medium"
                      >
                        {habilidad}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certificaciones */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Certificaciones:
                  </h4>
                  <ul className="space-y-1">
                    {profesor.certificaciones.map((certificacion, index) => (
                      <li
                        key={index}
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
                        {certificacion}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botón de Contacto */}
                <button
                  onClick={() => handleWhatsAppClick(profesor.nombre)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
                  </svg>
                  Clases con {profesor.nombre.split(" ")[0]}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Metodología */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestra Metodología de Enseñanza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos teoría y práctica con enfoque personalizado para
              garantizar tu éxito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Teoría Especializada
              </h3>
              <p className="text-gray-600">
                Clases teóricas interactivas con material actualizado y
                simuladores de examen.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Práctica Segura
              </h3>
              <p className="text-gray-600">
                Vehículos modernos y rutas diseñadas para cada nivel de
                aprendizaje.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-pink-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Atención Personalizada
              </h3>
              <p className="text-gray-600">
                Seguimiento individual y horarios flexibles adaptados a tus
                necesidades.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-xl mb-6 opacity-90">
            Elige al instructor que mejor se adapte a tus necesidades y comienza
            tu formación hoy
          </p>
          <button
            onClick={() => handleWhatsAppClick()}
            className="bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 rounded-lg font-semibold text-lg transition-colors duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
            </svg>
            Contactar para Clases
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profesores;
