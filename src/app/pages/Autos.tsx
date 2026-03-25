import { useState } from 'react';
import { Link } from 'react-router';
import { Filter } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { autos } from '../data/vehicles';

export function Autos() {
  const [transmisionFilter, setTransmisionFilter] = useState<string>('todas');
  const [precioMax, setPrecioMax] = useState<number>(500000);

  const autosFiltrados = autos.filter((auto) => {
    const matchTransmision = transmisionFilter === 'todas' || auto.transmision === transmisionFilter;
    const matchPrecio = auto.precio <= precioMax;
    return matchTransmision && matchPrecio;
  });

  const marcas = Array.from(new Set(autos.map((a) => a.marca))).sort();

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0C2340] to-[#1E5FA0] text-white px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center md:text-left">Catálogo de Autos Seminuevos</h1>
          <p className="text-xl text-gray-200 max-w-2xl text-center md:text-left">
            Encuentra el auto perfecto para ti. Todos nuestros vehículos pasan por una rigurosa inspección técnica de 150 puntos.
          </p>
        </div>
      </section>

      {/* FILTROS Y CONTENIDO */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* BARRA LATERAL DE FILTROS (Escritorio) / TOP (Móvil) */}
          <aside className="lg:w-1/4 space-y-8">
            <div className="bg-[#f4f6f9] p-6 rounded-2xl border border-gray-200 sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-[#0C2340]" />
                <h2 className="font-bold text-[#0C2340] text-lg">Filtros de Búsqueda</h2>
              </div>
              
              <div className="space-y-6">
                {/* Transmisión */}
                <div>
                  <label className="block text-sm font-bold text-[#0C2340] mb-3">
                    Tipo de Transmisión
                  </label>
                  <select
                    value={transmisionFilter}
                    onChange={(e) => setTransmisionFilter(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E5FA0] shadow-sm"
                  >
                    <option value="todas">Todas las transmisiones</option>
                    <option value="Automática">Automática</option>
                    <option value="Manual">Manual</option>
                  </select>
                </div>

                {/* Precio Máximo */}
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
                    min="100000"
                    max="500000"
                    step="10000"
                    value={precioMax}
                    onChange={(e) => setPrecioMax(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1E5FA0]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>$100k</span>
                    <span>$500k</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-gray-500 font-medium">
                Encontrados: <span className="text-[#0C2340] font-bold">{autosFiltrados.length}</span> unidades
              </div>
            </div>
          </aside>

          {/* LISTADO DE AUTOS */}
          <main className="lg:w-3/4">
            {autosFiltrados.length === 0 ? (
              <div className="bg-white rounded-2xl border border-dashed border-gray-300 p-12 text-center">
                <p className="text-gray-500 text-lg mb-6">No se encontraron autos con los criterios seleccionados.</p>
                <button
                  onClick={() => {
                    setTransmisionFilter('todas');
                    setPrecioMax(500000);
                  }}
                  className="bg-[#1E5FA0] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0C2340] transition-all shadow-lg"
                >
                  Restablecer Filtros
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {autosFiltrados.map((auto) => (
                  <Link
                    key={auto.id}
                    to={`/autos/${auto.id}`}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col"
                  >
                    <div className="relative">
                      <img
                        src={auto.imagen}
                        alt={`${auto.marca} ${auto.modelo}`}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-4 left-4 bg-[#0C2340]/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                        {auto.transmision}
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-bold text-[#0C2340] text-lg mb-1 group-hover:text-[#1E5FA0] transition-colors">
                        {auto.marca} {auto.modelo}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">{auto.año} • {auto.combustible}</p>
                      
                      <p className="text-2xl font-black text-[#1E5FA0] mb-4 mt-auto">
                        ${auto.precio.toLocaleString('es-MX')}
                      </p>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-gray-100 text-sm font-medium text-gray-600">
                        <span>{auto.kilometraje === 0 ? 'Por confirmar' : `${auto.kilometraje.toLocaleString('es-MX')} km`}</span>
                        <span className="text-[#1E5FA0] group-hover:translate-x-1 transition-transform">Detalles →</span>
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
            ¿Buscas algo específico?
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Si no encuentras el modelo exacto que necesitas, contáctanos. Tenemos acceso a un inventario extendido y podemos ayudarte a conseguirlo.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-[#1E5FA0] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#0C2340] transition-all transform hover:scale-105 shadow-xl"
          >
            Hablar con un Asesor
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
