import { useEffect, useState } from "react";
import { getAllVetements } from "../../api/VetementsCall";
import { useNavigate } from "react-router-dom";
import { AffichageTableau } from "../tableau/AffichageTableau";

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
      <AffichageTableau datas={vetements} isVetement={true} />
      <input
        class="button button-clear"
        type="submit"
        value="Retour"
        onClick={handleRetourClick}
      />
    </>
  );
}
