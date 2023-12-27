import { HomeArcs } from "../src/component/HomeArcs";
import { HomeArmes } from "../src/component/HomeArmes";
import { HomeAnnuaire } from "../src/component/HomeAnnuaire";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeBoucliers } from "./component/HomeBoucliers";
import { HomeIngredients } from "./component/HomeIngredients";
import { HomeVetements } from "./component/HomeVetements";

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
