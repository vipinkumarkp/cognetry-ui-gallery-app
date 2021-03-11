import React from "react";
import PublicRoute from "./PublicRoute";

const landingPage = React.lazy(() => import("../containers/Albums"));
const homePage = React.lazy(() => import("../containers/Home"));

export const allFlattenRoutes = [
  {
    path: "/",
    name: "Home",
    component: homePage,
    exact: true,
    route: PublicRoute,
  },
  {
    path: "/albums",
    name: "Albums",
    component: landingPage,
    exact: true,
    route: PublicRoute,
  }
];

export const authProtectedRoutes = [];
