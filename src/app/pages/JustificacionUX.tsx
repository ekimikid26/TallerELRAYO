import { Link } from 'react-router';
import { ChevronLeft, XCircle, CheckCircle, Lightbulb } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function JustificacionUX() {
  const paginas = [
    {
      nombre: 'Home',
      problemas: [
        'Fondo amarillo con texto rojo creaba contraste visual agresivo',
        'Mezcla de 4 tipografías generaba falta de jerarquía',
        'Texto parpadeante (.blink) dificultaba lectura',
        'Sin jerarquía clara entre servicios principales',
        'Botones sin call-to-action claros',
      ],
      cambios: [
        'Hero con degradado azul marino a azul medio',
        'Una sola tipografía sans-serif en todo el sitio',
        'Cards de servicios con iconos consistentes',
        'Autos y motos destacados con imágenes sin distorsión',
        'CTAs claros: "Ver Autos", "Contactar por WhatsApp"',
        'Sección "Por qué elegirnos" con iconos y textos cortos',
      ],
      justificacion: [
        'Paleta de colores profesional basada en identidad de marca',
        'Jerarquía visual clara: hero > servicios > productos destacados',
        'CTAs visibles en primera pantalla para aumentar conversión',
        'Imágenes con object-cover mantienen proporciones correctas',
        'Botón WhatsApp flotante siempre accesible',
        'Mobile-first: diseño optimizado para pantallas de celular',
      ],
    },
    {
      nombre: 'Catálogo de Autos',
      problemas: [
        'Cards con rotación aleatoria con Math.random() mareaba al usuario',
        'Imágenes distorsionadas con object-fit: fill',
        'Sin filtros funcionales',
        'Información desorganizada',
        'Botón de "compra" que solo abría alert() sin funcionalidad real',
      ],
      cambios: [
        'Filtros funcionales por transmisión y precio máximo',
        'Cards estáticos con hover suave',
        'Imágenes con object-cover (sin distorsión)',
        'Información organizada: marca/modelo, precio, specs',
        'Botón "Ver detalles" que lleva a página de detalle',
        'Contador de resultados filtrados',
      ],
      justificacion: [
        'Filtros permiten al usuario encontrar rápidamente lo que busca',
        'Cards sin animaciones innecesarias mejoran usabilidad',
        'object-cover mantiene calidad visual y profesionalismo',
        'Jerarquía de información: nombre > precio > características',
        'Navegación clara hacia detalles del vehículo',
        'Feedback visual del número de resultados',
      ],
    },
    {
      nombre: 'Detalle de Auto',
      problemas: [
        'Información mezclada sin estructura',
        'Imágenes pequeñas o distorsionadas',
        'Sin galería de imágenes',
        'Botón de compra falso (solo alert)',
        'Sin opciones claras de contacto',
      ],
      cambios: [
        'Galería de imágenes con miniaturas navegables',
        'Especificaciones en cards organizadas (2x2 grid)',
        'Descripción y características en secciones separadas',
        'CTAs fijos en parte inferior: Llamar y WhatsApp',
        'Sección para agendar prueba de manejo',
        'Breadcrumb para volver al catálogo',
      ],
      justificacion: [
        'Galería permite ver el vehículo en detalle (decisión de compra)',
        'Grid de especificaciones facilita escaneo rápido',
        'Características con checkmarks generan confianza',
        'CTAs fijos siempre visibles para conversión',
        'Breadcrumb mejora navegación y reduce tasa de rebote',
        'Enfoque en contacto (WhatsApp/llamada) en vez de compra directa',
      ],
    },
    {
      nombre: 'Catálogo de Motos',
      problemas: [
        'Mismos problemas que catálogo de autos',
        'Sin diferenciación clara con autos',
        'Filtros inexistentes o no funcionales',
      ],
      cambios: [
        'Estructura similar a autos para consistencia',
        'Filtro por precio adaptado a rango de motos',
        'Información relevante: cilindrada en lugar de transmisión',
        'Cards con diseño consistente pero datos específicos',
      ],
      justificacion: [
        'Consistencia en diseño facilita aprendizaje del usuario',
        'Filtros adaptados a necesidades específicas de motos',
        'Información relevante al tipo de vehículo',
        'Misma experiencia de usuario en ambos catálogos',
      ],
    },
    {
      nombre: 'Servicios del Taller',
      problemas: [
        'Información desorganizada',
        'Sin precios o información clara de servicios',
        'Horarios no visibles',
        'FAQ admitía irregularidades legales',
      ],
      cambios: [
        'Cards de servicios con iconos, descripción y precio',
        'Lista de items incluidos en cada servicio',
        'Sección "Por qué nuestro taller" con beneficios',
        'Horarios visibles claramente',
        'CTAs para agendar cita o contactar',
      ],
      justificacion: [
        'Transparencia en precios genera confianza',
        'Iconos ayudan a identificación rápida de servicios',
        'Beneficios tangibles convencen al usuario',
        'Horarios visibles evitan frustración',
        'CTAs claros facilitan conversión (agendar cita es prioridad)',
      ],
    },
    {
      nombre: 'Agendar Cita',
      problemas: [
        'Formulario que no enviaba nada real',
        'Campos sin validación',
        'Sin feedback al usuario',
        'Cursor: help en botón de enviar (error UX)',
      ],
      cambios: [
        'Formulario funcional con campos validados',
        'Envío directo por WhatsApp con datos estructurados',
        'Campos con tipos correctos (date, tel, select)',
        'Fecha mínima = hoy (no permite fechas pasadas)',
        'Horarios limitados al horario de atención',
        'Nota explicativa del proceso',
      ],
      justificacion: [
        'Formulario funcional genera confianza y conversiones reales',
        'WhatsApp como canal principal de contacto (preferencia del cliente)',
        'Validación evita errores y mejora calidad de leads',
        'Transparencia en el proceso (usuario sabe qué esperar)',
        'Horarios de atención visibles reducen consultas innecesarias',
      ],
    },
    {
      nombre: 'Contacto',
      problemas: [
        'Dirección falsa dañaba credibilidad',
        'Horarios sin definir',
        'Múltiples formas de contacto sin jerarquía',
        'Footer con texto legal en 8px ilegible',
        'Marquee de "COMPRA YA" poco profesional',
      ],
      cambios: [
        'WhatsApp como método principal (destacado en verde)',
        'Teléfono secundario con horarios claros',
        'Ubicación con enlace a Google Maps',
        'Horarios en formato claro y legible',
        'FAQ con respuestas profesionales y realistas',
        'Sin direcciones falsas ni información engañosa',
      ],
      justificacion: [
        'WhatsApp es el canal preferido por el cliente y su audiencia',
        'Jerarquía clara: WhatsApp > teléfono > ubicación',
        'Información honesta genera confianza a largo plazo',
        'FAQ responde dudas comunes y reduce fricción',
        'Horarios visibles evitan llamadas fuera de horario',
        'Diseño profesional transmite seriedad del negocio',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0C2340] to-[#1E5FA0] text-white px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-white mb-4 hover:text-gray-200">
            <ChevronLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold mb-2">Justificación UX - El Rayo</h1>
          <p className="text-gray-200">
            Documentación de decisiones de diseño para cada página del sitio
          </p>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="px-4 py-8 bg-[#f4f6f9]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-[#0C2340] mb-3">Principios de Diseño Aplicados</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-[#1E5FA0] flex-shrink-0 mt-0.5" />
                <span><strong>Mobile-first:</strong> Diseño optimizado para usuarios de celular (audiencia principal)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-[#1E5FA0] flex-shrink-0 mt-0.5" />
                <span><strong>Conversión:</strong> Objetivo claro en cada página (WhatsApp/llamada)</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-[#1E5FA0] flex-shrink-0 mt-0.5" />
                <span><strong>Simplicidad:</strong> Navegación clara con menú hamburguesa</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-[#1E5FA0] flex-shrink-0 mt-0.5" />
                <span><strong>Profesionalismo:</strong> Paleta coherente basada en identidad de marca</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-[#1E5FA0] flex-shrink-0 mt-0.5" />
                <span><strong>Transparencia:</strong> Información real, sin engaños ni datos falsos</span>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-[#1E5FA0] flex-shrink-0 mt-0.5" />
                <span><strong>Accesibilidad:</strong> Lenguaje claro, sin tecnicismos innecesarios</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ANÁLISIS POR PÁGINA */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {paginas.map((pagina, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Header */}
              <div className="bg-[#0C2340] text-white px-6 py-4">
                <h2 className="text-2xl font-bold">{pagina.nombre}</h2>
              </div>

              <div className="p-6 space-y-6">
                {/* Problemas del sitio original */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <h3 className="font-bold text-red-700">Problemas del Sitio Original</h3>
                  </div>
                  <ul className="space-y-2">
                    {pagina.problemas.map((problema, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-red-500 flex-shrink-0">•</span>
                        <span>{problema}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cambios implementados */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-[#1E5FA0]" />
                    <h3 className="font-bold text-[#0C2340]">Cambios Implementados</h3>
                  </div>
                  <ul className="space-y-2">
                    {pagina.cambios.map((cambio, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-[#1E5FA0] flex-shrink-0">✓</span>
                        <span>{cambio}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Justificación UX */}
                <div className="border-t border-gray-200 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb className="w-5 h-5 text-[#85B7EB]" />
                    <h3 className="font-bold text-[#0C2340]">Justificación UX</h3>
                  </div>
                  <ul className="space-y-2">
                    {pagina.justificacion.map((justif, i) => (
                      <li key={i} className="flex gap-2 text-sm text-gray-700">
                        <span className="text-[#85B7EB] flex-shrink-0">→</span>
                        <span>{justif}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ELEMENTOS GLOBALES */}
      <section className="px-4 py-12 bg-[#f4f6f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#0C2340] mb-6">Elementos Globales</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#0C2340] mb-3">Header con Menú Hamburguesa</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Antes:</strong> Navbar con 10 links de 7 colores distintos</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Ahora:</strong> Logo + menú hamburguesa limpio</p>
              <p className="text-sm text-gray-600"><strong>Por qué:</strong> Simplifica navegación en móvil, reduce carga cognitiva, enfoca en contenido</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#0C2340] mb-3">Botón de WhatsApp Flotante</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Antes:</strong> Sin botón persistente de contacto</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Ahora:</strong> Botón verde flotante en todas las páginas</p>
              <p className="text-sm text-gray-600"><strong>Por qué:</strong> WhatsApp es el canal preferido, debe estar siempre accesible para maximizar conversión</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#0C2340] mb-3">Footer Informativo</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Antes:</strong> Texto legal 8px, marquee "COMPRA YA", información incompleta</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Ahora:</strong> Contacto, horarios, enlaces rápidos, tamaño legible</p>
              <p className="text-sm text-gray-600"><strong>Por qué:</strong> Footer es lugar común de búsqueda de contacto e información básica</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#0C2340] mb-3">Paleta de Colores</h3>
              <div className="flex gap-2 mb-2">
                <div className="w-12 h-12 bg-[#0C2340] rounded border border-gray-300"></div>
                <div className="w-12 h-12 bg-[#1E5FA0] rounded border border-gray-300"></div>
                <div className="w-12 h-12 bg-[#85B7EB] rounded border border-gray-300"></div>
                <div className="w-12 h-12 bg-white rounded border border-gray-300"></div>
                <div className="w-12 h-12 bg-[#f4f6f9] rounded border border-gray-300"></div>
              </div>
              <p className="text-sm text-gray-700 mb-2"><strong>Antes:</strong> Amarillo con rojo, sin coherencia</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Ahora:</strong> Azul marino, azul medio, azul claro, blanco, gris claro</p>
              <p className="text-sm text-gray-600"><strong>Por qué:</strong> Basado en logo (azul/plateado), transmite confianza y profesionalismo</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-[#0C2340] mb-3">Tipografía</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Antes:</strong> 4 tipografías mezcladas</p>
              <p className="text-sm text-gray-700 mb-2"><strong>Ahora:</strong> Una sola familia sans-serif</p>
              <p className="text-sm text-gray-600"><strong>Por qué:</strong> Consistencia visual, jerarquía clara mediante tamaños y pesos, mejor legibilidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0C2340] to-[#1E5FA0] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Resultado Final</h2>
            <p className="text-gray-200 mb-4">
              El rediseño transforma un sitio web caótico y poco profesional en una herramienta de conversión efectiva que:
            </p>
            <ul className="space-y-2 text-gray-200">
              <li>✓ Genera confianza con diseño profesional y consistente</li>
              <li>✓ Facilita el contacto por WhatsApp (canal principal del negocio)</li>
              <li>✓ Presenta información clara sin engaños</li>
              <li>✓ Optimiza para móvil (audiencia principal)</li>
              <li>✓ Prioriza el taller mecánico (negocio principal) usando vehículos como gancho visual</li>
              <li>✓ Reduce fricción en el proceso de contacto y agendamiento</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
