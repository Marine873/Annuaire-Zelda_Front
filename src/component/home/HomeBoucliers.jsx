import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBoucliers } from "../../api/BoucliersCall";
import { AffichageTableau } from "../tableau/AffichageTableau";

export function HomeBoucliers() {
  const [boucliers, setBoucliers] = useState([]);
  useEffect(() => {
    getAllBoucliers().then((listeBoucliers) => {
      setBoucliers(listeBoucliers);
    });
  }, []);

  const navigate = useNavigate();
  const handleRetourClick = () => {
    navigate("/annuaire");
  };

  return (
    <>
      <h1>Liste des boucliers</h1>
      <AffichageTableau datas={boucliers} isBouclier={true} />
      <input
        class="button button-clear"
        type="submit"
        value="Retour"
        onClick={handleRetourClick}
      />
    </>
  );
}
