import useRecipeStore from '../store/useRecipeStore';

const FavoriteToggleButton = ({ recipeId }) => {
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const isFavorite = favorites.includes(recipeId);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button onClick={toggleFavorite}>
      {isFavorite ? '★ Remove Favorite' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteToggleButton;
