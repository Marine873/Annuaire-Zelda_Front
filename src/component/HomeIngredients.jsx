import { useEffect, useState } from "react";
import { getAllIngredients } from "../api/IngredientsCall";
import { useNavigate } from "react-router-dom";

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
      <table>
        <thead>
          <tr>
            <th>Jeux</th>
            <th>Nom</th>
          </tr>
        </thead>
        <tbody>
          {ingredients?.map((ingredient) => (
            <tr key={ingredient.id}>
              <th>{ingredient.jeux}</th>
              <th>{ingredient.nom}</th>
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
