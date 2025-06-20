import { Outlet } from "react-router";
import Nav from "../pages/Navigation/Nav";

function PrivateLayout() {
  return (
    <section className="min-h-screen">
      <Nav />
      <main className="wrapper pt-20 md:pt-0 md:pl-64">
        <header className="flex justify-between text-2xl font-bold mb-4" />
        <Outlet />
      </main>
    </section>
  );
}

export default PrivateLayout;
