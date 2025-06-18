import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement ici (API, EmailJS, etc.)
    console.log("Formulaire soumis:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#0e0e0e] text-white py-20 px-6">
      <div className="text-center mb-12">
        <h5 className="text-[#d4af37] uppercase tracking-widest text-sm">Entrons en contact</h5>
        <h2 className="text-4xl font-bold">Me contacter</h2>
      </div>

      <div className="max-w-3xl mx-auto bg-[#1a1a1a] p-8 rounded-lg border border-[#d4af37]/30 shadow-lg">
        {submitted ? (
          <p className="text-center text-lg text-green-400">Merci pour votre message ✉️</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-[#0e0e0e] border border-white/10 text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-[#0e0e0e] border border-white/10 text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded bg-[#0e0e0e] border border-white/10 text-white focus:outline-none focus:border-[#d4af37]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black font-semibold py-3 rounded-full shadow hover:from-[#e3c770] hover:to-[#d4af37] transition duration-300"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
