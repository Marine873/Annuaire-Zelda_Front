import { useEffect, useState } from "react";
import { getAllIngredients } from "../../api/IngredientsCall";
import { useNavigate } from "react-router-dom";
import { AffichageTableau } from "../tableau/AffichageTableau";

export function HomeIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getAllIngredients().then((listeIngredients) => {
      setIngredients(listeIngredients);
    });
  }, []);

  const navigate = useNavigate();
  const handleRetourClick = () => {
    navigate("/annuaire");
  };

  return (
    <>
      <h1>Liste des ingredients</h1>
      <AffichageTableau datas={ingredients} IsIngredient={true} />
      <input
        class="button button-clear"
        type="submit"
        value="Retour"
        onClick={handleRetourClick}
      />
    </>
  );
}
