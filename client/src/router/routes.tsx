import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const MainLayout = lazy(() => import("../layouts/main.layout"));

const ErrorPage = lazy(() => import("../pages/error.page"));

const SuperheroesPage = lazy(
  () => import("../features/superheroes/pages/superheroes.page")
);

const superheroes: RouteObject = {
  index: true,
  element: <SuperheroesPage />,
};

const routesChildren: RouteObject[] = [superheroes];

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [...routesChildren],
  },
];
export default routes;
