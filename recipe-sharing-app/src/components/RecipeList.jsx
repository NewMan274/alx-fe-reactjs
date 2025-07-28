import useRecipeStore from "../store/useRecipeStore";
import { Link } from 'react-router-dom';
/* import FavoriteToggleButton from "./FavoriteToggleButton"; */

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  /* const recipee = useRecipeStore(state => state.recipe) */

  return (
    <div>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
      {/* <FavoriteToggleButton recipeId={recipee.id} /> */}
    </div>
  );
};

export default RecipeList;