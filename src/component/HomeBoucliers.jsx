import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBoucliers } from "../api/BoucliersCall";

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
      <table>
        <thead>
          <tr>
            <th>Jeux</th>
            <th>Nom</th>
            <th>Durabilité</th>
            <th>Attaque</th>
            <th>Disponibilité</th>
          </tr>
        </thead>
        <tbody>
          {boucliers?.map((bouclier) => (
            <tr key={bouclier.id}>
              <th>{bouclier.jeux}</th>
              <th>{bouclier.nom}</th>
              <th>{bouclier.durabilite}</th>
              <th>{bouclier.attaque}</th>
              <th>{bouclier.disponibilite}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        class="button button-clear"
        type="submit"
        value="Retour"
        onClick={handleRetourClick}
      />
    </>
  );
}
