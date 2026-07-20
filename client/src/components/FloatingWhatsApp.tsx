import { Phone } from "lucide-react";
import { useT } from '@/i18n/useT';

const WHATSAPP_NUMBER = "250787999646";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function FloatingWhatsApp() {
  const t = useT();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label={t('whatsapp.ariaLabel')}
      className="fixed right-3 bottom-3 md:right-4 md:bottom-4 z-50"
    >
      <span
        className="relative flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <Phone size={20} className="md:drop-shadow" />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-white/0 transition-all duration-200 hover:ring-white/35" />
      </span>
    </a>
  );
}
