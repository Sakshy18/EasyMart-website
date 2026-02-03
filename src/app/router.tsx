import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CategoriesPage from "../pages/CategoriesPage/CategoriesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
  path: "/categories/:category",
  element: <CategoriesPage />,
},

]);
