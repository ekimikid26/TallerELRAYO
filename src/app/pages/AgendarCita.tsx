import { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

export function AgendarCita() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    servicio: '',
    fecha: '',
    hora: '',
    mensaje: '',
  });

  const servicios = [
    'Mantenimiento Preventivo',
    'Reparación Mecánica',
    'Frenos y Suspensión',
    'Inspección Pre-Compra',
    'Prueba de Manejo (Autos)',
    'Visita (Motos)',
    'Otro',
  ];

  const horarios = [
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = '5652189129';
    const mensaje = `Hola, me gustaría agendar una cita:

*Nombre:* ${formData.nombre}
*Teléfono:* ${formData.telefono}
*Email:* ${formData.email}
*Servicio:* ${formData.servicio}
*Fecha:* ${formData.fecha}
*Hora:* ${formData.hora}
${formData.mensaje ? `*Mensaje:* ${formData.mensaje}` : ''}

Quedo atento a su confirmación.`;

    const whatsappUrl = `https://wa.me/52${phoneNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Obtener fecha mínima (hoy)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0C2340] to-[#1E5FA0] text-white px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="bg-white/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
            <Calendar className="w-10 h-10 text-[#85B7EB]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Reserva tu Espacio</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Agenda hoy mismo y evita filas. Tu tiempo es valioso, por eso priorizamos las citas programadas en nuestro taller.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL: FORMULARIO E INFO */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* COLUMNA IZQUIERDA: FORMULARIO */}
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-[#1E5FA0]"></div>
            <h2 className="text-3xl font-bold text-[#0C2340] mb-8">Datos de la Cita</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nombre */}
                <div className="md:col-span-2">
                  <label htmlFor="nombre" className="block text-sm font-bold text-[#0C2340] mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E5FA0] transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-bold text-[#0C2340] mb-2">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    required
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E5FA0] transition-all"
                    placeholder="55 1234 5678"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0C2340] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E5FA0] transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                {/* Servicio */}
                <div className="md:col-span-2">
                  <label htmlFor="servicio" className="block text-sm font-bold text-[#0C2340] mb-2">
                    Servicio Requerido *
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    required
                    value={formData.servicio}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E5FA0] transition-all appearance-none"
                  >
                    <option value="">Selecciona una opción</option>
                    {servicios.map((servicio) => (
                      <option key={servicio} value={servicio}>
                        {servicio}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fecha */}
                <div>
                  <label htmlFor="fecha" className="block text-sm font-bold text-[#0C2340] mb-2">
                    Fecha de Preferencia *
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    name="fecha"
                    required
                    min={today}
                    value={formData.fecha}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E5FA0] transition-all"
                  />
                </div>

                {/* Hora */}
                <div>
                  <label htmlFor="hora" className="block text-sm font-bold text-[#0C2340] mb-2">
                    Horario Estimado *
                  </label>
                  <select
                    id="hora"
                    name="hora"
                    required
                    value={formData.hora}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E5FA0] transition-all appearance-none"
                  >
                    <option value="">Selecciona una hora</option>
                    {horarios.map((hora) => (
                      <option key={hora} value={hora}>
                        {hora} hrs
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Mensaje adicional */}
              <div>
                <label htmlFor="mensaje" className="block text-sm font-bold text-[#0C2340] mb-2">
                  Cuéntanos más sobre el problema o interés
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1E5FA0] transition-all"
                  placeholder="Ej. Mi auto hace un ruido al frenar..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25D366] text-white px-8 py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-xl shadow-[#25D366]/20 flex items-center justify-center gap-3"
              >
                Solicitar por WhatsApp
                <CheckCircle className="w-6 h-6" />
              </button>
              
              <p className="text-center text-xs text-gray-500 font-medium">
                Al hacer clic, serás redirigido a WhatsApp para finalizar la confirmación.
              </p>
            </form>
          </div>

          {/* COLUMNA DERECHA: BENEFICIOS E INFO */}
          <div className="lg:pt-12 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0C2340] mb-8">¿Por qué agendar con nosotros?</h2>
              <div className="space-y-6">
                <div className="flex gap-6 items-start">
                  <div className="bg-blue-50 p-4 rounded-2xl shrink-0">
                    <Calendar className="w-6 h-6 text-[#1E5FA0]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C2340] mb-1">Prioridad en Turno</h3>
                    <p className="text-gray-600">Las citas agendadas tienen preferencia de entrada sobre servicios generales.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-green-50 p-4 rounded-2xl shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0C2340] mb-1">Confirmación Directa</h3>
                    <p className="text-gray-600">Hablamos contigo personalmente para entender tu necesidad antes de que llegues.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* HORARIOS */}
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <h2 className="text-xl font-bold text-[#0C2340] mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Horarios Disponibles
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-gray-600 font-medium">Lunes a Viernes</span>
                  <span className="font-bold text-[#0C2340]">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm">
                  <span className="text-gray-600 font-medium">Sábados</span>
                  <span className="font-bold text-[#0C2340]">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between items-center bg-red-50 p-4 rounded-xl">
                  <span className="text-red-700 font-medium">Domingos</span>
                  <span className="font-bold text-red-700">Cerrado</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1E5FA0] p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
               <div className="absolute -right-8 -bottom-8 opacity-10">
                 <Calendar className="w-48 h-48" />
               </div>
               <h3 className="text-xl font-bold mb-4 relative z-10">¿Emergencia en el camino?</h3>
               <p className="text-white/80 mb-6 relative z-10">Si te quedaste varado o necesitas auxilio vial, contáctanos directamente por teléfono para atención prioritaria.</p>
               <a href="tel:5652189129" className="inline-block bg-white text-[#1E5FA0] px-6 py-3 rounded-xl font-bold relative z-10 hover:bg-gray-100 transition-colors">
                 Llamar Ahora
               </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
