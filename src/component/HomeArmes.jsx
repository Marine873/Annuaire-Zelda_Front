import { useEffect, useState } from "react";
import { getAllArmes } from "../api/ArmesCall";
import { useNavigate } from "react-router-dom";

export function HomeArmes() {
  const [armes, setArmes] = useState([]);

  useEffect(() => {
    getAllArmes().then((listeArmes) => {
      setArmes(listeArmes);
    });
  }, []);

  const navigate = useNavigate();
  const handleRetourClick = () => {
    navigate("/annuaire");
  };

  return (
    <>
      <h1>Liste des armes</h1>
      <table>
        <thead>
          <tr>
            <th>Jeux</th>
            <th>Type d'arme</th>
            <th>Nom</th>
            <th>Attaque de base</th>
            <th>Rang 1</th>
            <th>Rang 2</th>
            <th>Durabilité de base</th>
            <th>Rang 1</th>
            <th>Rang 2</th>
            <th>Effet de jet</th>
            <th>Base</th>
            <th>Bonus</th>
            <th>Disponibilité</th>
          </tr>
        </thead>
        <tbody>
          {armes?.map((arme) => (
            <tr key={arme.id}>
              <th>{arme.jeux}</th>
              <th>{arme.typeArme}</th>
              <th>{arme.nom}</th>
              <th>{arme.attaqueBase}</th>
              <th>{arme.attaqueRang1Max}</th>
              <th>{arme.attaqueRang2Max}</th>
              <th>{arme.durabiliteBase}</th>
              <th>{arme.durabiliteRang1Max}</th>
              <th>{arme.durabiliteRang2Max}</th>
              <th>{arme.jetEffet}</th>
              <th>{arme.jetBase}</th>
              <th>{arme.jetBonus}</th>
              <th>{arme.disponibilite}</th>
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
