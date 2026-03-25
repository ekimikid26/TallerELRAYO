import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { ChevronLeft, Phone, CheckCircle, Calendar } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { autos } from '../data/vehicles';
import logoWhatsApp from '../../assets/LogoWhatsApp.jpeg';

export function AutoDetalle() {
  const { id } = useParams();
  const auto = autos.find((a) => a.id === id);
  const [imagenActual, setImagenActual] = useState(0);

  if (!auto) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-[#0C2340] mb-4">Auto no encontrado</h1>
          <Link to="/autos" className="text-[#1E5FA0] font-semibold">
            Volver al catálogo
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const contactarWhatsApp = () => {
    const phoneNumber = '5652189129';
    const message = encodeURIComponent(
      `Hola, me interesa el ${auto.marca} ${auto.modelo} ${auto.año}. ¿Podría darme más información?`
    );
    window.open(`https://wa.me/52${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Botón volver */}
      <div className="px-4 py-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <Link to="/autos" className="inline-flex items-center gap-2 text-[#1E5FA0] font-bold hover:translate-x-1 transition-transform">
            <ChevronLeft className="w-5 h-5" />
            Volver al Catálogo de Autos
          </Link>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* GALERÍA DE IMÁGENES */}
          <section className="space-y-4">
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] flex items-center justify-center">
              <img
                src={auto.imagenes[imagenActual]}
                alt={`${auto.marca} ${auto.modelo}`}
                className="w-full h-full object-contain"
              />
            </div>
            {auto.imagenes.length > 1 && (
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {auto.imagenes.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setImagenActual(index)}
                    className={`aspect-square rounded-xl border-2 overflow-hidden transition-all ${
                      imagenActual === index ? 'border-[#1E5FA0] scale-95 shadow-lg' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </section>

          {/* INFORMACIÓN Y FICHA TÉCNICA */}
          <section className="space-y-8">
            <div className="border-b border-gray-100 pb-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl md:text-5xl font-black text-[#0C2340] mb-2">
                    {auto.marca} {auto.modelo}
                  </h1>
                  <p className="text-xl text-gray-400 font-medium">Modelo {auto.año} • {auto.combustible}</p>
                </div>
                <div className="bg-blue-50 text-[#1E5FA0] px-4 py-2 rounded-xl font-bold text-sm">
                  Verificado
                </div>
              </div>
              <p className="text-4xl font-black text-[#1E5FA0]">
                ${auto.precio.toLocaleString('es-MX')}
              </p>
            </div>

            {/* Especificaciones clave */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Kilometraje</p>
                <p className="text-lg font-black text-[#0C2340]">
                  {auto.kilometraje === 0 ? 'Por confirmar' : <>{auto.kilometraje.toLocaleString('es-MX')} <span className="text-xs">km</span></>}
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Transmisión</p>
                <p className="text-lg font-black text-[#0C2340]">{auto.transmision}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Pasajeros</p>
                <p className="text-lg font-black text-[#0C2340]">{auto.pasajeros}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 text-center">
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Tracción</p>
                <p className="text-lg font-black text-[#0C2340]">{auto.traccion}</p>
              </div>
            </div>

            {/* Descripción */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#0C2340] mb-4">Reseña del Vehículo</h2>
              <p className="text-gray-600 leading-relaxed text-lg italic">"{auto.descripcion}"</p>
            </div>

            {/* Características */}
            <div>
              <h2 className="text-2xl font-bold text-[#0C2340] mb-6">Equipamiento Destacado</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {auto.caracteristicas.map((caracteristica, index) => (
                  <div key={index} className="flex items-center gap-3 bg-blue-50/50 p-3 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-[#1E5FA0] shrink-0" />
                    <span className="text-gray-700 font-medium">{caracteristica}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de acción Escritorio */}
            <div className="hidden lg:grid grid-cols-2 gap-4 pt-8 border-t border-gray-100">
              <button
                onClick={contactarWhatsApp}
                className="bg-white border-2 border-[#25D366] text-[#25D366] px-8 py-4 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-xl shadow-[#25D366]/10 flex items-center justify-center gap-3"
              >
                <img src={logoWhatsApp} alt="Logo WhatsApp" className="w-8 h-8 object-contain rounded-lg" />
                Consultar vía WhatsApp
              </button>
              <a
                href="tel:5652189129"
                className="bg-[#0C2340] text-white px-8 py-5 rounded-2xl font-black text-lg hover:bg-[#1E5FA0] transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Llamar a un Asesor
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* CTA Móvil (fijo abajo) */}
      <section className="lg:hidden sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-gray-100 px-4 py-4 shadow-2xl z-50">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:5652189129"
            className="bg-[#0C2340] text-white px-4 py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm"
          >
            <Phone className="w-5 h-5" />
            Llamar
          </a>
          <button
            onClick={contactarWhatsApp}
            className="bg-white border-2 border-[#25D366] text-[#25D366] px-4 py-3 rounded-xl font-bold flex items-center justify-center gap-2 text-sm"
          >
            <img src={logoWhatsApp} alt="WhatsApp" className="w-6 h-6 object-contain rounded-md" />
            WhatsApp
          </button>
        </div>
      </section>

      {/* Sección adicional - Agendar prueba de manejo */}
      <section className="px-4 py-12 bg-[#f4f6f9]">
        <div className="max-w-xl mx-auto text-center">
          <Calendar className="w-12 h-12 mx-auto mb-4 text-[#1E5FA0]" />
          <h2 className="text-xl font-bold text-[#0C2340] mb-3">
            ¿Quieres Probar este Auto?
          </h2>
          <p className="text-gray-600 mb-6">
            Agenda una cita para una prueba de manejo sin compromiso
          </p>
          <Link
            to="/agendar-cita"
            className="inline-block bg-[#1E5FA0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0C2340] transition-colors"
          >
            Agendar Cita
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
