import { createBrowserRouter, type RouteObject } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Typing from "@/pages/Typing";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Typing />,
      },
      {
        path: "/typing",
        element: <Typing />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
