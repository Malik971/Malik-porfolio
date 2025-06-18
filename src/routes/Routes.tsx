// src/router.tsx

import { createBrowserRouter, Navigate } from "react-router";
import PrivateLayout from "../layout/PrivateLayout";
import Home from "../pages/Home";
import App from "../App";
import ErrorPage from "../../ErreurPage";
import About from "../components/About";
import Projet from "../pages/Projet";
import Experience from "../pages/Experiences";
import Logbook from "../pages/Logbook";
import Contact from "../layout/Contacte";

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
            index: true,
            element: <Navigate to="/private/About" replace />,
          },
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
            element: <Experience />,
          },
          {
            path: "Carnet",
            element: <Logbook />,
          },
          {
            path: "Contact",
            element: <Contact />,
          },
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
