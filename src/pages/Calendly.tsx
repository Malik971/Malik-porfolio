// src/pages/Calendly.tsx
function Calendly() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0e0e0e] p-4">
      <div className="w-full max-w-4xl h-[80vh] shadow-xl rounded-lg overflow-hidden border border-[#d4af37]/30">
        <iframe
          src="https://calendly.com/malik97un/30min"
          width="100%"
          height="100%"
          frameBorder="0"
          className="rounded-lg"
        ></iframe>
      </div>
    </section>
  );
}

export default Calendly;
