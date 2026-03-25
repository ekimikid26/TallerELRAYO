import { Link } from 'react-router';
import { Phone, MapPin, Clock } from 'lucide-react';
import logoRayo from '../../assets/logo-rayo.png';
import nombreRayo from '../../assets/ElRayo_SinFondo.png';

export function Footer() {
  return (
    <footer className="bg-[#0C2340] text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Columna 1: Logo y descripción */}
          <div>
            <div className="flex items-center gap-4 mb-8 group">
              <div className="bg-white/5 p-2 rounded-2xl group-hover:bg-white/10 transition-colors shrink-0">
                <img src={logoRayo} alt="Logo El Rayo" className="w-24 h-24 object-contain" />
              </div>
              <img src={nombreRayo} alt="El Rayo" className="h-12 object-contain" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              15 años de experiencia en venta de autos seminuevos, motos y servicios de taller mecánico en Ciudad de México. Comprometidos con la calidad y la confianza de nuestros clientes.
            </p>
          </div>

          {/* Columna 2: Información de contacto */}
          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider text-[#85B7EB]">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#85B7EB] flex-shrink-0" />
                <p className="text-sm text-gray-300">Ciudad de México</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#85B7EB] flex-shrink-0" />
                <a href="tel:5652189129" className="text-sm text-gray-300 hover:text-white transition-colors">
                  56 5218 9129
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#85B7EB] flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Lunes a Viernes: 9:00 - 18:00</p>
                  <p>Sábados: 9:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3: Enlaces rápidos */}
          <div>
            <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider text-[#85B7EB]">Enlaces rápidos</h3>
            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link to="/autos" className="text-sm text-gray-300 hover:text-white transition-colors">
                Autos
              </Link>
              <Link to="/motos" className="text-sm text-gray-300 hover:text-white transition-colors">
                Motos
              </Link>
              <Link to="/servicios" className="text-sm text-gray-300 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link to="/agendar-cita" className="text-sm text-gray-300 hover:text-white transition-colors">
                Agendar Cita
              </Link>
              <Link to="/contacto" className="text-sm text-gray-300 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1E5FA0] mt-12 pt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} El Rayo. Todos los derechos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            Calidad y confianza automotriz.
          </p>
        </div>
      </div>
    </footer>
  );
}