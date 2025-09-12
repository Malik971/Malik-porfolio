// src/pages/Calendly.tsx
import { useEffect } from "react";

function Calendly() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-[#0e0e0e] text-[#f5f5f5] flex flex-col items-center justify-center h-screen overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-[#d4af37] mb-4">
        Réservez un rendez-vous
      </h2>

      <div
        className="calendly-inline-widget w-full max-w-5xl rounded-xl border border-[#d4af37]/40 shadow-lg"
        data-url="https://calendly.com/malik97un/30min?primary_color=d4af37&text_color=f5f5f5&background_color=0e0e0e"
        style={{ minWidth: "320px", height: "85vh" }}
      ></div>
    </section>
  );
}

export default Calendly;
