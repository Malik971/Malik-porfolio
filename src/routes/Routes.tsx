// src/router.tsx

import { createBrowserRouter } from "react-router";
import PrivateLayout from "../layout/PrivateLayout";
import Home from "../pages/Home";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "private",
        element: <PrivateLayout />,
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
