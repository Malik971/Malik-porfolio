// src/router.tsx

import { createBrowserRouter } from "react-router";
import PrivateLayout from "../layout/PrivateLayout";
import Home from "../pages/Home";
import App from "../App";
import ErrorPage from "../../ErreurPage";
import About from "../components/About";
import Projet from "../pages/Projet";
import Experience from "../pages/Experiences";
import Logbook from "../pages/Logbook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "private",
        element: <PrivateLayout />,
        children: [
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "About",
            element: <About />,
          },
          {
            path: "Projet",
            element: <Projet />,
          },
          {
            path: "Experience",
            element: <Experience />
          },
          {
            path: "Carnet",
            element: <Logbook />
          }
        ],
      },
      {
        path: "public",
        element: <div>Page publique sans Nav</div>,
      },
    ],
  },
]);

export default router;
