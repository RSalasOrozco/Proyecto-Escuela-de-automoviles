import Image from "next/image";
import Link from "next/link";
import { Shield, Award, Clock } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/pexels-gmb-visuals-564876670-17544873.jpg?height=1080&width=1920"
        alt="Carretera con un coche moderno"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 text-white text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Conduce hacia tu futuro
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8">
          Aprende a conducir con los mejores profesionales
        </p>
        <Link
          href="/inscribete"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          ¡Inscríbete ahora!
        </Link>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Seguridad primero</h3>
            <p className="text-sm">
              Aprende las mejores prácticas de seguridad vial
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Award className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Instructores certificados
            </h3>
            <p className="text-sm">
              Aprende de los mejores profesionales del sector
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-12 w-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Horarios flexibles</h3>
            <p className="text-sm">Adapta las clases a tu ritmo de vida</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
