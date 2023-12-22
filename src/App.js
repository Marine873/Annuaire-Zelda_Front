import { HomeArcs } from "../src/component/HomeArcs";
import { HomeArmes } from "../src/component/HomeArmes";
import { HomeAnnuaire } from "../src/component/HomeAnnuaire";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "milligram";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <>
        <Outlet />
      </>
    ),
    children: [
      { path: "annuaire?", Component: HomeAnnuaire },
      { path: "arcs", Component: HomeArcs },
      { path: "armes", Component: HomeArmes },
    ],
  },
]);
