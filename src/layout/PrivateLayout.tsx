// layout/PrivateLayout.tsx
import { Outlet } from "react-router-dom";
import Nav from "../pages/Navigation/Nav";
import Footer from "../components/Footer";

function PrivateLayout() {
  return (
    <section className="min-h-screen">
      <Nav />
      <main className="wrapper pt-20 md:pt-0 pl-0 md:pl-64">
        <header className="flex justify-between text-2xl font-bold" />
        <Outlet />
        <Footer />
      </main>
    </section>
  );
}

export default PrivateLayout;
