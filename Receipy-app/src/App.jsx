import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import RecipeCard from "./components/RecipeCard";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div>
      <Header />

      <Search setRecipes={setRecipes} />

      <RecipeCard
        recipes={recipes}
        setSelectedRecipe={setSelectedRecipe}
      />

      {selectedRecipe && (
        <RecipeDetails recipe={selectedRecipe} />
      )}
    </div>
  );
}

export default App;