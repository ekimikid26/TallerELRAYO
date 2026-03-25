import { useState } from 'react';
import { Link } from 'react-router';
import { Filter } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { motos } from '../data/vehicles';

export function Motos() {
  const [precioMax, setPrecioMax] = useState<number>(650000);

  const motosFiltradas = motos.filter((moto) => moto.precio <= precioMax);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0C2340] to-[#1E5FA0] text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">Catálogo de Motos</h1>
          <p className="text-xl text-gray-200 max-w-2xl text-center md:text-left">
            Explora nuestra selección de motocicletas seminuevas. Ideales para la ciudad, el trabajo o la carretera.
          </p>
        </div>
      </section>

      {/* FILTROS Y CONTENIDO */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* BARRA LATERAL DE FILTROS */}
          <aside className="lg:w-1/4">
            <div className="bg-[#f4f6f9] p-6 rounded-2xl border border-gray-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-[#0C2340]" />
                <h2 className="font-bold text-[#0C2340] text-lg">Filtros</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-bold text-[#0C2340]">
                      Precio Máximo
                    </label>
                    <span className="text-[#1E5FA0] font-bold">
                      ${precioMax.toLocaleString('es-MX')}
                    </span>
                  </div>
                   <input
                    type="range"
                    min="10000"
                    max="650000"
                    step="10000"
                    value={precioMax}
                    onChange={(e) => setPrecioMax(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1E5FA0]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>$10k</span>
                    <span>$650k</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-sm font-medium text-gray-500">
                Mostrando <span className="text-[#0C2340] font-bold">{motosFiltradas.length}</span> unidades
              </div>
            </div>
          </aside>

          {/* LISTADO DE MOTOS */}
          <main className="lg:w-3/4">
            {motosFiltradas.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
                <p className="text-gray-500 text-lg mb-6">No se encontraron motos con el presupuesto seleccionado.</p>
                <button
                  onClick={() => setPrecioMax(650000)}
                  className="bg-[#1E5FA0] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0C2340] transition-all shadow-lg"
                >
                  Ver todas las motos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {motosFiltradas.map((moto) => (
                  <Link
                    key={moto.id}
                    to={`/motos/${moto.id}`}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col"
                  >
                    <div className="relative">
                      <img
                        src={moto.imagen}
                        alt={`${moto.marca} ${moto.modelo}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#0C2340]">
                        Disponible
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-[#0C2340] text-lg mb-1 group-hover:text-[#1E5FA0] transition-colors">
                        {moto.marca} {moto.modelo}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">{moto.año} • {moto.cilindrada}</p>
                      
                      <p className="text-2xl font-black text-[#1E5FA0] mb-4 mt-auto">
                        ${moto.precio.toLocaleString('es-MX')}
                      </p>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm font-medium text-gray-600">
                        <span>{moto.kilometraje === 0 ? 'Por confirmar' : `${moto.kilometraje.toLocaleString('es-MX')} km`}</span>
                        <span className="text-[#1E5FA0] group-hover:translate-x-1 transition-transform">Ver ficha →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* CTA */}
      <section className="px-4 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0C2340] mb-4">
            ¿Buscas una cilindrada mayor?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Tenemos contacto con proveedores de motos de alta gama y modelos específicos. Cuéntanos qué buscas y te lo conseguimos al mejor precio.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-[#1E5FA0] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#0C2340] transition-all transform hover:scale-105 shadow-xl"
          >
            Preguntar por más modelos
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
