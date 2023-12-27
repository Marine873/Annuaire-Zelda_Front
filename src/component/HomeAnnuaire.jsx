import { useNavigate } from "react-router-dom";
import { GiPocketBow } from "react-icons/gi";
import { PiSword } from "react-icons/pi";
import { GiRoundShield } from "react-icons/gi";
import { GiButterflyFlower } from "react-icons/gi";
import { GiSpellBook } from "react-icons/gi";
import { GiClothes } from "react-icons/gi";

import "../style/home.css";

export function HomeAnnuaire() {
  const navigate = useNavigate();
  const handleArcClick = () => {
    navigate("/arcs");
  };
  const handleArmesClick = () => {
    navigate("/armes");
  };
  const handleBoucliersClick = () => {
    navigate("/boucliers");
  };
  const handleIngredientsClick = () => {
    navigate("/ingredients");
  };
  const handleVetementsClick = () => {
    navigate("/vetements");
  };
  // const handleRecettesClick = () => {
  //   navigate("/recettes");
  // };

  return (
    <>
      <h1 className="annuaire_titre">Annuaire Zelda</h1>
      <div class="container" className="annuaire_grille">
        <div class="row" className="annuaire_grilleLigne">
          <div class="column" className="annuaire_case">
            <GiPocketBow size={100} />
            <button class="button button-outline" onClick={handleArcClick}>
              Arcs
            </button>
          </div>
          <div class="column" className="annuaire_case">
            <PiSword size={100} />
            <button class="button button-outline" onClick={handleArmesClick}>
              Armes
            </button>
          </div>
          <div class="column" className="annuaire_case">
            <GiRoundShield size={100} />
            <button
              class="button button-outline"
              onClick={handleBoucliersClick}
            >
              Boucliers
            </button>
          </div>
          <div class="column" className="annuaire_case">
            <GiButterflyFlower size={100} />
            <button
              class="button button-outline"
              onClick={handleIngredientsClick}
            >
              Ingrédients
            </button>
          </div>
          <div class="column" className="annuaire_case">
            <GiClothes size={100} />
            <button
              class="button button-outline"
              onClick={handleVetementsClick}
            >
              Vêtements
            </button>
          </div>
          <div class="column" className="annuaire_case">
            <GiSpellBook size={100} />
            <button class="button button-outline">Recettes</button>
          </div>
        </div>
      </div>
    </>
  );
}
