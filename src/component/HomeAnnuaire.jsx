import { useNavigate } from "react-router-dom";
import Arc from "../assets/archery-icon-5.png";
import Epee from "../assets/1904608.png";
import Bouclier from "../assets/31837.png";

import "../style/home.css";

export function HomeAnnuaire() {
  const navigate = useNavigate();
  const handleArcClick = () => {
    navigate("/arcs");
  };
  const handleArmesClick = () => {
    navigate("/armes");
  };

  return (
    <>
      <h1 className="annuaire_titre">Annuaire Zelda</h1>
      <div class="container">
        <div class="row">
          <div class="column" className="annuaire_case">
            <img src={Arc} alt="/" className="annuaire_image" />
            <button class="button button-outline" onClick={handleArcClick}>
              Arcs
            </button>
          </div>
          <div class="column" className="annuaire_case">
            <img src={Epee} alt="/" className="annuaire_image" />
            <button class="button button-outline" onClick={handleArmesClick}>
              Armes
            </button>
          </div>
          <div class="column" className="annuaire_case">
            <img src={Bouclier} alt="/" className="annuaire_image" />
            <button class="button button-outline">Boucliers</button>
          </div>
          <div class="column" className="annuaire_case">
            <button class="button button-outline">Ingrédients</button>
          </div>
          <div class="column" className="annuaire_case">
            <button class="button button-outline">Recettes</button>
          </div>
        </div>
      </div>
    </>
  );
}
