import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hello Terra Ecopreneurs, I'm interested in your sustainability solutions (energy efficiency, clean energy, agriculture & TRANSFORM). Could we talk?"
  );

  return (
    <a
      href={`https://wa.me/91xxx xxx?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
      aria-label="Chat with Terra Ecopreneurs on WhatsApp"
    >
      <FaWhatsapp size={30} className="text-white" />
    </a>
  );
}