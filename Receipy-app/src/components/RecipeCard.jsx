import "./recipeCard.css";

function RecipeCard({ recipes, setSelectedRecipe }) {
  return (
    <div className="recipe-container">
      {recipes.map((recipe) => {
        return (
          <div className="recipe-card" key={recipe.idMeal}>
            <img src={recipe.strMealThumb} />

            <h2>{recipe.strMeal}</h2>

            <p>{recipe.strCategory}</p>

            <button onClick={() => setSelectedRecipe(recipe)}>
              View Recipe
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeCard;