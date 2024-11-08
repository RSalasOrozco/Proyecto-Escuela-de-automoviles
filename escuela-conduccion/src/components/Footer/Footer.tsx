import Link from "next/link";
import {
  Car,
  Book,
  Users,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

const Footer = () => {
  const navItems = [
    { name: "Inicio", href: "/", icon: Car },
    { name: "Cursos", href: "/cursos", icon: Book },
    { name: "Instructores", href: "/instructores", icon: Users },
    { name: "Contacto", href: "/contacto", icon: Phone }
  ];

  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AutoEscuela Pro</h3>
            <p className="text-sm">
              Formando conductores responsables desde 1990
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:underline flex items-center"
                  >
                    <item.icon className="inline-block h-4 w-4 mr-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-blue-500 pt-8 text-center">
          <p className="text-sm">
            &copy; 2023 AutoEscuela Pro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
