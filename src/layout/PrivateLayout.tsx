import { Outlet } from "react-router";
import Nav from "../pages/Nav";

function PrivateLayout() {
  return (
    <section className="min-h-screen">
      <Nav />
      <main className="wrapper pl-64 pr-10">
        <header className="flex justify-between my-3 text-2xl font-bold">
          <h3>Déclaration</h3>
          <span>Malik</span>
        </header>
        <Outlet />
      </main>
    </section>
  );
}

export default PrivateLayout;
