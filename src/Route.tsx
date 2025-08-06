import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "./BaseLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
      ],
    },
  ]
  // {
  //   basename: "/PortFolio",
  // }
);

export default router;
