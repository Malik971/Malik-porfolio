import { Link } from "react-router";

function ErrorPage() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center min-h-screen">
      <Link
        type="button"
        className="border-4 rounded-md border-blue-700 text-blue-700 px-46 py-4 hover:bg-blue-600 hover:text-white transition-colors duration-300"
        to={"/private/home"}
      >
        Retour à L'acceuil
      </Link>
      <h1>La page que vous rechercher n'existe pas</h1>
    </section>
  );
}

export default ErrorPage;
