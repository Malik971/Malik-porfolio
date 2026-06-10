// src/router.tsx

import { createBrowserRouter, Navigate } from "react-router";
import PrivateLayout from "../layout/PrivateLayout";
import App from "../App";
import ErrorPage from "../../ErreurPage";
import About from "../components/About";
import Project from "../pages/Project";
import Experience from "../pages/Experiences";
import Parcours from "../pages/Parcours";
import Calendly from "../pages/Calendly";
import Libriciel from "../pages/Libriciel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace />,
      },
      {
        element: <PrivateLayout />,
        children: [
          { path: "about", element: <About /> },
          { path: "projets", element: <Project /> },
          { path: "competences", element: <Experience /> },
          { path: "parcours", element: <Parcours /> },
          { path: "libriciel", element: <Libriciel /> },
          { path: "contact", element: <Calendly /> },
        ],
      },
    ],
  },
]);

export default router;
