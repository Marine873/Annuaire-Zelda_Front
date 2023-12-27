import { useEffect, useState } from "react";
import { getAllVetements } from "../api/VetementsCall";
import { useNavigate } from "react-router-dom";

export function HomeVetements() {
  const [vetements, setVetements] = useState([]);

  useEffect(() => {
    getAllVetements().then((listeVetements) => {
      setVetements(listeVetements);
    });
  }, []);

  const navigate = useNavigate();
  const handleRetourClick = () => {
    navigate("/annuaire");
  };

  return (
    <>
      <h1>Liste des vetements</h1>
      <table>
        <thead>
          <tr>
            <th>Jeux</th>
            <th>Set</th>
            <th>Nom</th>
            <th>Défense (min)</th>
            <th>Défense (max)</th>
            <th>Partie du corps</th>
            <th>Localisation</th>
            <th>Effet</th>
            <th>Bonus de set</th>
          </tr>
        </thead>
        <tbody>
          {vetements?.map((vetement) => (
            <tr key={vetement.id}>
              <th>{vetement.jeux}</th>
              <th>{vetement.setVetement}</th>
              <th>{vetement.nom}</th>
              <th>{vetement.defMini}</th>
              <th>{vetement.defMax}</th>
              <th>{vetement.partieCorps}</th>
              <th>{vetement.localisation}</th>
              <th>{vetement.effet}</th>
              <th>{vetement.bonusSet}</th>
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
