import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';
import logoWhatsApp from '../../assets/LogoWhatsApp.jpeg';

export function Contacto() {
  const contactarWhatsApp = () => {
    const phoneNumber = '5652189129';
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
    window.open(`https://wa.me/52${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0C2340] to-[#1E5FA0] text-white px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Estamos a un clic de distancia</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Ya sea que busques el auto de tus sueños o necesites mantenimiento experto, nuestro equipo está listo para atenderte con la calidad que nos distingue.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL: CONTACTO Y MAPA */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0C2340] mb-8">Canales de Atención</h2>
              <div className="grid gap-6">
                {/* WhatsApp */}
                <button
                  onClick={contactarWhatsApp}
                  className="group w-full bg-[#f0fff4] border border-[#25D366]/20 p-6 rounded-3xl hover:bg-[#25D366] transition-all duration-300 text-left shadow-sm hover:shadow-xl hover:shadow-[#25D366]/20"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-white p-3 rounded-2xl transition-colors shrink-0 shadow-sm border border-[#25D366]/20">
                      <img src={logoWhatsApp} alt="Logo WhatsApp" className="w-10 h-10 object-contain rounded-lg" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0C2340] group-hover:text-white text-lg mb-1">WhatsApp Business</h3>
                      <p className="text-gray-600 group-hover:text-white/90 font-medium">56 5218 9129</p>
                      <p className="text-xs text-[#25D366] group-hover:text-white/80 mt-1 font-bold">Respuesta inmediata →</p>
                    </div>
                  </div>
                </button>

                {/* Teléfono */}
                <a
                  href="tel:5652189129"
                  className="group block bg-white border border-gray-100 p-6 rounded-3xl hover:border-[#1E5FA0] hover:shadow-xl transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-gray-100 group-hover:bg-[#1E5FA0] p-4 rounded-2xl transition-colors shrink-0">
                      <Phone className="w-8 h-8 text-[#1E5FA0] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0C2340] text-lg mb-1">Atención Telefónica</h3>
                      <p className="text-gray-600 font-medium">Llámanos directamente</p>
                      <p className="text-sm text-[#1E5FA0] font-bold mt-1">Disp. 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </a>

                {/* Correo */}
                <a
                  href="mailto:contacto@elrayo.com"
                  className="group block bg-white border border-gray-100 p-6 rounded-3xl hover:border-[#1E5FA0] hover:shadow-xl transition-all duration-300 shadow-sm"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-gray-100 group-hover:bg-[#1E5FA0] p-4 rounded-2xl transition-colors shrink-0">
                      <Mail className="w-8 h-8 text-[#1E5FA0] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0C2340] text-lg mb-1">Correo Electrónico</h3>
                      <p className="text-gray-600 font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px] md:max-w-full">contacto@elrayo.com</p>
                      <p className="text-sm text-[#1E5FA0] font-bold mt-1">Escríbenos tus dudas</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* HORARIOS INTEGRADOS */}
            <div className="bg-[#0C2340] p-8 rounded-3xl text-white shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <Clock className="w-8 h-8 text-[#85B7EB]" />
                <h3 className="text-2xl font-bold">Horarios de Sucursal</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400 font-medium">Lunes a Viernes</span>
                  <span className="font-bold text-lg">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-400 font-medium">Sábados</span>
                  <span className="font-bold text-lg">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-400 font-medium">Domingos</span>
                  <span className="text-red-400 font-bold">Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: MAPA Y UBICACIÓN */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-[#0C2340] mb-8">Nuestra Ubicación</h2>
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-xl overflow-hidden group">
              <div className="relative h-[450px] rounded-2xl overflow-hidden">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-full bg-gradient-to-br from-[#0C2340] to-[#1E5FA0] text-white hover:opacity-95 transition-opacity relative"
                >
                  <div className="absolute inset-0 bg-cover bg-center opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&h=600&fit=crop)'}}></div>
                  <div className="text-center relative z-10 p-8">
                    <div className="bg-white/20 backdrop-blur-md w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-2xl font-bold mb-4">Ciudad de México, MX</p>
                    <p className="text-gray-200 mb-8 max-w-xs mx-auto">Visítanos y conoce nuestro inventario de forma presencial.</p>
                    <span className="bg-white text-[#0C2340] px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-white/20 transition-all">
                      Abrir en Google Maps
                    </span>
                  </div>
                </a>
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-[#1E5FA0]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0C2340]">Dirección Principal</h4>
                    <p className="text-gray-600">Av. Insurgentes Sur 1234, CDMX, México</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PREGUNTAS FRECUENTES - REDISEÑADO A GRID */}
      <section className="px-4 py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0C2340] mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-medium">Resolvimos las dudas más comunes para que ahorres tiempo.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0C2340] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-50 text-[#1E5FA0] rounded-full flex items-center justify-center text-sm font-black italic">Q</span>
                ¿Aceptan pagos con tarjeta o transferencia?
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Aceptamos transferencias bancarias directas para mayor seguridad. Consulta con tu asesor sobre la opción de terminal bancaria para pagos con tarjeta.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0C2340] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-50 text-[#1E5FA0] rounded-full flex items-center justify-center text-sm font-black italic">Q</span>
                ¿Es necesario agendar cita previa?
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Altamente recomendado. Agendar nos permite asignarte un asesor o mecánico de forma inmediata, evitando esperas innecesarias.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0C2340] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-50 text-[#1E5FA0] rounded-full flex items-center justify-center text-sm font-black italic">Q</span>
                ¿Qué documentos necesito para vender mi auto?
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Factura original, comprobantes de tenencias, tarjeta de circulación vigente y una identificación oficial. Nosotros te apoyamos con el trámite.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-[#0C2340] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-blue-50 text-[#1E5FA0] rounded-full flex items-center justify-center text-sm font-black italic">Q</span>
                ¿Realizan envíos a otros estados?
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium">
                Sí, coordinamos traslados certificados a toda la República Mexicana. El costo depende de la ubicación y el tipo de transporte solicitado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-24 bg-[#0C2340] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-md w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/20 overflow-hidden shadow-2xl shadow-[#25D366]/10">
            <img src={logoWhatsApp} alt="Logo WhatsApp" className="w-16 h-16 object-contain rounded-2xl" />
          </div>
          <h2 className="text-4xl font-bold mb-6">¿Prefieres una atención inmediata?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Nuestros asesores en línea están listos para enviarte fotos, videos y el historial completo de cualquier unidad por WhatsApp.
          </p>
          <button
            onClick={contactarWhatsApp}
            className="group bg-white border-2 border-[#25D366] text-[#25D366] px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(37,211,102,0.1)] inline-flex items-center gap-4 text-lg"
          >
            Chatear con un Especialista
            <img src={logoWhatsApp} alt="WhatsApp" className="w-8 h-8 object-contain rounded-lg group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
