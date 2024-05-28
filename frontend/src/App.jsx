import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/Home";
import BlogsPage from "./pages/Blogs";
import CategoriesPage from "./pages/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/categories",
    element: <CategoriesPage />,
  },
  {
    path: "/blogs/:categoryId?",
    element: <BlogsPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
