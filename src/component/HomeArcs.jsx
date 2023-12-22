import { useEffect, useState } from "react";
import { getAllArcs } from "../api/ArcsCall";
import { useNavigate } from "react-router-dom";

export function HomeArcs() {
  const [arcs, setArcs] = useState([]);

  useEffect(() => {
    getAllArcs().then((listeArcs) => {
      setArcs(listeArcs);
    });
  }, []);

  const navigate = useNavigate();
  const handleRetourClick = () => {
    navigate("/annuaire");
  };

  return (
    <>
      <h1>Liste des arcs</h1>
      <table>
        <thead>
          <tr>
            <th>Jeux</th>
            <th>Nom</th>
            <th>Attaque</th>
            <th>Durabilité</th>
            <th>Portée</th>
            <th>Multiflêches</th>
            <th>Visée</th>
            <th>Disponibilité</th>
          </tr>
        </thead>
        <tbody>
          {arcs?.map((arc) => (
            <tr key={arc.id}>
              <th>{arc.jeux}</th>
              <th>{arc.nom}</th>
              <th>{arc.attaque}</th>
              <th>{arc.durabilite}</th>
              <th>{arc.portee}</th>
              <th>{arc.multifleches}</th>
              <th>{arc.visee}</th>
              <th>{arc.disponibilite}</th>
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
