import { Link } from 'react-router';
import { Car, Bike, Wrench, Calendar, Phone, CheckCircle, Clock, Shield, Zap } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { autos, motos } from '../data/vehicles';

export function Home() {
  const featuredAutos = autos.slice(0, 3);
  const featuredMotos = motos.slice(0, 2);

  const whatsappContact = () => {
    const phoneNumber = '5652189129';
    const message = encodeURIComponent('Hola, me gustaría obtener más información.');
    window.open(`https://wa.me/52${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#0C2340] to-[#1E5FA0] text-white px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Autos y Motos Seminuevos de Confianza
          </h1>
          <p className="text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
            15 años de experiencia en Ciudad de México. Encuentra tu vehículo ideal y servicio de taller especializado con la mejor calidad del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/autos"
              className="bg-white text-[#0C2340] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-blue-900/20"
            >
              Explorar Catálogo de Autos
            </Link>
            <button
              onClick={whatsappContact}
              className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#20BA5A] transition-all transform hover:scale-105 shadow-lg shadow-green-900/20"
            >
              Contactar por WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0C2340] mb-12 text-center">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/autos"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <Car className="w-12 h-12 text-[#0C2340] mb-4" />
                <h3 className="text-xl font-bold text-[#0C2340] mb-2">Autos Seminuevos</h3>
                <p className="text-gray-600">
                  Encuentra el auto perfecto en nuestro catálogo de vehículos verificados.
                </p>
              </div>
            </Link>
            <Link
              to="/motos"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <Bike className="w-12 h-12 text-[#0C2340] mb-4" />
                <h3 className="text-xl font-bold text-[#0C2340] mb-2">Motos</h3>
                <p className="text-gray-600">
                  Amplia variedad de motocicletas seminuevas en excelentes condiciones.
                </p>
              </div>
            </Link>
            <Link
              to="/servicios"
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <Wrench className="w-12 h-12 text-[#0C2340] mb-4" />
                <h3 className="text-xl font-bold text-[#0C2340] mb-2">Taller Mecánico</h3>
                <p className="text-gray-600">
                  Servicio especializado de mantenimiento Preventivo y correctivo.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AUTOS DESTACADOS */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0C2340] mb-2">Autos Destacados</h2>
              <p className="text-gray-600">Lo más buscado de nuestro inventario actual</p>
            </div>
            <Link to="/autos" className="text-[#1E5FA0] font-bold hover:underline">
              Ver todos los autos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAutos.map((auto) => (
              <div key={auto.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img src={auto.imagen} alt={`${auto.marca} ${auto.modelo}`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0C2340] mb-2">{auto.marca} {auto.modelo}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">{auto.año} • {auto.kilometraje === 0 ? 'Por confirmar' : `${auto.kilometraje.toLocaleString()} km`}</span>
                    <span className="text-xl font-bold text-[#1E5FA0]">${auto.precio.toLocaleString()}</span>
                  </div>
                  <Link
                    to={`/autos/${auto.id}`}
                    className="block text-center border-2 border-[#0C2340] text-[#0C2340] py-2 rounded-lg font-bold hover:bg-[#0C2340] hover:text-white transition-all"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOTOS DESTACADAS */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0C2340] mb-2">Motos Destacadas</h2>
              <p className="text-gray-600">Explora nuestro catálogo de motocicletas</p>
            </div>
            <Link to="/motos" className="text-[#1E5FA0] font-bold hover:underline">
              Ver todas las motos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMotos.map((moto) => (
              <div key={moto.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img src={moto.imagen} alt={`${moto.marca} ${moto.modelo}`} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0C2340] mb-2">{moto.marca} {moto.modelo}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">{moto.año} • {moto.kilometraje === 0 ? 'Por confirmar' : `${moto.kilometraje.toLocaleString()} km`}</span>
                    <span className="text-xl font-bold text-[#1E5FA0]">${moto.precio.toLocaleString()}</span>
                  </div>
                  <Link
                    to={`/motos/${moto.id}`}
                    className="block text-center border-2 border-[#0C2340] text-[#0C2340] py-2 rounded-lg font-bold hover:bg-[#0C2340] hover:text-white transition-all"
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0C2340] mb-8">¿Por qué Elegir El Rayo?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-[#1E5FA0]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C2340] mb-1">15 Años de Experiencia</h3>
                    <p className="text-gray-600">Trayectoria comprobada en el mercado de CDMX.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-[#1E5FA0]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C2340] mb-1">Vehículos Verificados</h3>
                    <p className="text-gray-600">Inspección técnica y legal exhaustiva en cada unidad.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-[#1E5FA0]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C2340] mb-1">Atención Prioritaria</h3>
                    <p className="text-gray-600">Asesoría directa y honesta en cada paso.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#0C2340] rounded-2xl p-8 text-white">
              <Zap className="w-12 h-12 text-[#85B7EB] mb-6" />
              <blockquote className="text-2xl italic font-light mb-8">
                "Nuestro objetivo es que cada cliente salga manejando no solo un vehículo, sino la tranquilidad de saber que hizo un buen negocio."
              </blockquote>
              <p className="font-bold text-xl">— Jacinto Flores Durán</p>
              <p className="text-blue-300">Fundador de El Rayo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-20 bg-[#0C2340] text-white text-center">
        <div className="max-w-7xl mx-auto">
          <Calendar className="w-16 h-16 mx-auto mb-8 text-[#85B7EB]" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6">¿Listo para su Próximo Vehículo?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Visítanos hoy mismo o agenda una prueba de manejo sin compromiso. Estamos para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agendar-cita"
              className="bg-white text-[#0C2340] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
            >
              Agendar Cita
            </Link>
            <a
              href="tel:5652189129"
              className="border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0C2340] transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Llamar Ahora
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}