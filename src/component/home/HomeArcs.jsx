import { useEffect, useState } from "react";
import { getAllArcs } from "../../api/ArcsCall";
import { useNavigate } from "react-router-dom";
import { AffichageTableau } from "../tableau/AffichageTableau";

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
      <AffichageTableau datas={arcs} isArc={true} />
      <input
        class="button button-clear"
        type="submit"
        value="Retour"
        onClick={handleRetourClick}
      />
    </>
  );
}
