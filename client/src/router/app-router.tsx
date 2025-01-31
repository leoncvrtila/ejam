import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import routes from "./routes";

const router = createBrowserRouter(routes);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
