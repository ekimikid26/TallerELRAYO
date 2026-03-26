import { Link } from 'react-router';
import { Wrench, CheckCircle, Clock, Shield, Settings, Car, Palette } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function Servicios() {
  const servicios = [
    {
      id: 1,
      icono: Settings,
      titulo: 'Mantenimiento Preventivo',
      descripcion: 'Cambio de aceite, filtros, revisión general de sistemas.',
      precio: 'Cotización según diagnóstico',
      items: ['Cambio de aceite y filtro', 'Revisión de frenos', 'Revisión de suspensión', 'Revisión de luces'],
    },
    {
      id: 2,
      icono: Wrench,
      titulo: 'Reparaciones Mecánicas',
      descripcion: 'Diagnóstico y reparación de motor, transmisión y sistemas eléctricos.',
      precio: 'Cotización según diagnóstico',
      items: ['Diagnóstico computarizado', 'Reparación de motor', 'Reparación de transmisión', 'Sistema eléctrico'],
    },
    {
      id: 3,
      icono: Car,
      titulo: 'Frenos y Suspensión',
      descripcion: 'Cambio de balatas, discos, amortiguadores y componentes de suspensión.',
      precio: 'Cotización según diagnóstico',
      items: ['Cambio de balatas', 'Cambio de discos', 'Amortiguadores', 'Alineación y balanceo'],
    },
    {
      id: 4,
      icono: Shield,
      titulo: 'Inspección Pre-Compra',
      descripcion: 'Revisión completa antes de comprar un auto usado.',
      precio: 'Cotización según diagnóstico',
      items: ['Revisión mecánica completa', 'Verificación de documentos', 'Reporte detallado', 'Recomendaciones'],
    },
    {
      id: 5,
      icono: Palette,
      titulo: 'Hojalatería y Pintura',
      descripcion: 'Reparación de golpes, abolladuras y pintura automotriz con acabado profesional.',
      precio: 'Cotización según diagnóstico',
      items: ['Reparación de golpes', 'Pintura por pieza', 'Pintura general', 'Pulido y encerado'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0C2340] to-[#1E5FA0] text-white px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Wrench className="w-12 h-12 text-[#85B7EB]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Servicios de Taller Especializado</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Mantenimiento preventivo y correctivo con estándares de agencia. 15 años cuidando la seguridad de tu familia en el camino.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="px-4 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-[#0C2340] mb-2">Nuestras Soluciones</h2>
              <p className="text-gray-600 font-medium">Equipamiento tecnológico de vanguardia y mecánicos expertos</p>
            </div>
            <div className="bg-[#f4f6f9] px-4 py-2 rounded-full text-sm font-bold text-[#1E5FA0]">
              Atención inmediata con cita
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicios.map((servicio) => {
              const Icono = servicio.icono;
              return (
                <div
                  key={servicio.id}
                  className="group bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                >
                  <div className="flex items-start gap-6 mb-8">
                    <div className="bg-[#0C2340] p-4 rounded-2xl group-hover:bg-[#1E5FA0] transition-colors shrink-0">
                      <Icono className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[#0C2340] mb-2">{servicio.titulo}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{servicio.descripcion}</p>
                      <div className="inline-block bg-blue-50 text-[#1E5FA0] px-4 py-1 rounded-full text-sm font-bold">
                        {servicio.precio}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 mt-auto">
                    {servicio.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#85B7EB] shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/agendar-cita"
                    className="w-full py-4 text-center border-2 border-[#0C2340] text-[#0C2340] rounded-xl font-bold hover:bg-[#0C2340] hover:text-white transition-all"
                  >
                    Cotizar Servicio
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POR QUÉ NUESTRO TALLER */}
      <section className="px-4 py-24 bg-[#0C2340] text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Excelencia Técnica Garantizada
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <Shield className="w-10 h-10 text-[#85B7EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Mecánicos Certificados</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Personal capacitado con certificaciones de marcas líderes en el sector automotriz.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <CheckCircle className="w-10 h-10 text-[#85B7EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Refacciones Originales</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Solo instalamos componentes genuinos o certificados con garantía de fabricante.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <Clock className="w-10 h-10 text-[#85B7EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Tiempos Optimizados</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Entendemos el valor de tu tiempo. Entregas puntuales garantizadas por contrato.
              </p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <Wrench className="w-10 h-10 text-[#85B7EB] mb-6" />
              <h3 className="text-xl font-bold mb-3">Diagnóstico Preciso</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Equipamiento SCANNER de última generación para detectar fallas invisibles al ojo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HORARIOS */}
      <section className="px-4 py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#0C2340] mb-6">
                Horarios de Servicio
              </h2>
              <p className="text-gray-600 mb-8">
                Estamos abiertos para recibir tu vehículo en los siguientes horarios. Recomendamos agendar cita para reducir tiempos de espera.
              </p>
              <div className="flex items-center gap-3 text-[#1E5FA0] font-bold">
                <Clock className="w-6 h-6" />
                <span>Atención Telefónica 24/7</span>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-medium text-gray-700">Lunes a Viernes</span>
                  <span className="font-bold text-[#0C2340] bg-white px-3 py-1 rounded-lg">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                  <span className="font-medium text-gray-700">Sábados</span>
                  <span className="font-bold text-[#0C2340] bg-white px-3 py-1 rounded-lg">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-xl">
                  <span className="font-medium text-gray-700">Domingos</span>
                  <span className="font-bold text-red-600 bg-white px-3 py-1 rounded-lg">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24 bg-gradient-to-br from-[#1E5FA0] to-[#85B7EB] text-[#0C2340]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-6">¿Tu vehículo necesita mantenimiento?</h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto opacity-80">
            Agenda tu cita hoy mismo y recibe una revisión de niveles sin costo adicional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/agendar-cita"
              className="bg-[#0C2340] text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-2xl"
            >
              Agendar Cita en Línea
            </Link>
            <Link
              to="/contacto"
              className="bg-white/20 backdrop-blur-md border border-[#0C2340]/20 text-[#0C2340] px-10 py-4 rounded-xl font-bold hover:bg-white/40 transition-all"
            >
              Hablar con Soporte
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
