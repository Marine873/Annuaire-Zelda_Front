import { useEffect, useState } from "react";
import { getAllArmes } from "../../api/ArmesCall";
import { useNavigate } from "react-router-dom";
import { AffichageTableau } from "../tableau/AffichageTableau";

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
      <AffichageTableau datas={armes} isArme={true} />
      <input
        class="button button-clear"
        type="submit"
        value="Retour"
        onClick={handleRetourClick}
      />
    </>
  );
}
