export default function WhatsAppButton() {
  const phoneNumber = '250787999646';
  const chatUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={chatUrl}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Chat on WhatsApp with Little Eden School"
      title="Chat on WhatsApp"
      className="fixed bottom-4 right-4 z-[60] flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl shadow-black/20 transition-transform duration-200 hover:-translate-y-1 hover:bg-[#1fbf5b] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-7 w-7 fill-current"
        >
          <path d="M19.11 17.26c-.26-.13-1.54-.76-1.78-.85-.24-.09-.41-.13-.58.13-.17.26-.67.85-.82 1.03-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.09-1.27-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.43-.43-.58-.44h-.5c-.17 0-.45.06-.69.32-.24.26-.93.9-.93 2.2s.95 2.55 1.08 2.73c.13.17 1.87 2.86 4.53 4.01.63.27 1.12.43 1.5.55.63.2 1.2.17 1.65.1.5-.07 1.54-.63 1.75-1.24.22-.61.22-1.12.15-1.24-.06-.11-.24-.17-.5-.3z" />
          <path d="M26.7 5.28A13.32 13.32 0 0 0 16.06 0C8.6 0 2.53 6.06 2.53 13.53c0 2.38.63 4.7 1.82 6.73L2.39 32l11.96-1.98a13.44 13.44 0 0 0 6.37 1.62h.01c7.46 0 13.53-6.07 13.53-13.53 0-3.62-1.41-7.02-3.96-9.54zM20.77 28.1h-.01a11.15 11.15 0 0 1-5.69-1.57l-.41-.24-7.09 1.17 1.2-6.9-.26-.45a11.1 11.1 0 0 1-1.72-5.88c0-6.14 4.99-11.13 11.14-11.13 2.98 0 5.78 1.16 7.89 3.26a11.08 11.08 0 0 1 3.26 7.88c0 6.15-5 11.13-11.13 11.13z" />
        </svg>
      </span>
      <span className="hidden sm:block text-left leading-tight">
        <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/80">WhatsApp</span>
        <span className="block text-sm font-bold"></span>
      </span>
    </a>
  );
}