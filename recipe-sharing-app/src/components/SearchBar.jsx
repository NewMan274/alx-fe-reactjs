import useRecipeStore from '../store/useRecipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border p-2 w-full mb-4"
    />
  );
};

export default SearchBar;
