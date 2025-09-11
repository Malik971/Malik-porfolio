import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="bg-black min-h-screen text-white font-sans">
      <div>
        <Outlet />
      </div>
    </main>
  );
}

export default App;
