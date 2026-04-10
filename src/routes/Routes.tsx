// src/router.tsx

import { createBrowserRouter, Navigate } from "react-router";
import PrivateLayout from "../layout/PrivateLayout";
import Home from "../pages/Home";
import App from "../App";
import ErrorPage from "../../ErreurPage";
import About from "../components/About";
import Project from "../pages/Project";
import Experience from "../pages/Experiences";
import Logbook from "../pages/Logbook";
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
        element: <Navigate to="/private/About" replace />,
      },
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
            path: "Project",
            element: <Project />,
          },
          {
            path: "Competences",
            element: <Experience />,
          },
          { path: "calendly", element: <Calendly /> },
          {
            path: "Carnet",
            element: <Logbook />,
          },
          {
            path: "Libriciel",
            element: <Libriciel />,
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
