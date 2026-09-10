import "./recipeDetails.css"
function RecipeDetails({ recipe }) {
  return (
    <div className="recipe-details">
      <h1>{recipe.strMeal}</h1>

      <img src={recipe.strMealThumb} />

      <h3>Category: {recipe.strCategory}</h3>

      <h3>Instructions</h3>

      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetails;