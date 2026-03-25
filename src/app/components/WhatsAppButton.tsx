import logoWhatsApp from '../../assets/LogoWhatsApp.jpeg';

export function WhatsAppButton() {
  const phoneNumber = '5652189129';
  const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  const whatsappUrl = `https://wa.me/52${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-white border-2 border-[#25D366] p-2 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center overflow-hidden"
      aria-label="Contactar por WhatsApp"
    >
      <img src={logoWhatsApp} alt="WhatsApp" className="w-10 h-10 object-contain rounded-full" />
    </a>
  );
}
