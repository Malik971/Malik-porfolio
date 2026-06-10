import { Link } from "react-router";

function ErrorPage() {
  return (
    <section className="bg-[#0e0e0e] text-white min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-[#d4af37] text-7xl font-bold mb-2">404</p>
      <h1 className="text-2xl font-semibold mb-3">Cette page n'existe pas</h1>
      <p className="text-gray-500 text-sm mb-8 max-w-md">
        Le lien est peut-être cassé, ou la page a été déplacée.
      </p>
      <Link
        to="/about"
        className="px-7 py-3 bg-gradient-to-r from-[#d4af37] to-[#e3c770] text-black font-semibold rounded-full hover:from-[#e3c770] hover:to-[#d4af37] transition duration-300"
      >
        ← Retour à l'accueil
      </Link>
    </section>
  );
}

export default ErrorPage;
