// src/router.tsx

import { createBrowserRouter } from "react-router";
import PrivateLayout from "../layout/PrivateLayout";
import Home from "../pages/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // layout global
    children: [
      {
        path: "private",
        element: <PrivateLayout />, // layout avec Nav
        children: [
          {
            path: "home",
            element: <Home />,
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
