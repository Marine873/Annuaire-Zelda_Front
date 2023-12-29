import { HomeAnnuaire } from "../src/component/HomeAnnuaire";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeArcs } from "./component/home/HomeArcs";
import { HomeArmes } from "./component/home/HomeArmes";
import { HomeBoucliers } from "./component/home/HomeBoucliers";
import { HomeIngredients } from "./component/home/HomeIngredients";
import { HomeVetements } from "./component/home/HomeVetements";

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
      { path: "boucliers", Component: HomeBoucliers },
      { path: "ingredients", Component: HomeIngredients },
      { path: "vetements", Component: HomeVetements },
    ],
  },
]);
