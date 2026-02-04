import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const CategoriesPage = lazy(() => import("../pages/CategoriesPage/CategoriesPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
  path: "/categories/:categoryId",
  element: <CategoriesPage />,
},

]);
