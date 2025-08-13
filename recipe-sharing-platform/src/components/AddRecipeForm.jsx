import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function AddRecipeForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please list at least two ingredients";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split("\n"),
      instructions: steps.split("\n"),
      summary: steps.substring(0, 80) + "...",
      image: "https://via.placeholder.com/150",
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Navigate back to home
    navigate("/");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-block mb-4 text-indigo-600 hover:underline">
        ← Back to Recipes
      </Link>

      <h1 className="text-3xl font-bold mb-6">Add a New Recipe</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-6 max-w-lg mx-auto"
      >
        {/* Title */}
        <div>
          <label className="block font-semibold mb-2">Recipe Title</label>
          <input
            type="text"
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-semibold mb-2">Ingredients (one per line)</label>
          <textarea
            className={`w-full border rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-semibold mb-2">Preparation Steps (one per line)</label>
          <textarea
            className={`w-full border rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 w-full"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
