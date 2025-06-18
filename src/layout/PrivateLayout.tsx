import { Outlet } from "react-router";
import Nav from "../pages/Nav";

function PrivateLayout() {
  return (
    <section className="min-h-screen">
      <Nav />
      <main className="wrapper pl-64 pr-10">
        <header className="flex justify-between text-2xl font-bold">
        </header>
        <Outlet />
      </main>
    </section>
  );
}

export default PrivateLayout;
