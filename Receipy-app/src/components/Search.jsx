import { useState } from "react";
import "./search.css"
function Search({ setRecipes }) {

  const [search, setSearch] = useState("");

  function searchRecipe() {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals);
      });
  }

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search for a recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchRecipe}>
        Search
      </button>

    </div>
  );
}

export default Search;