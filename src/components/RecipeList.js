import React from 'react';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} width="100" />
            <button onClick={() => onSelectRecipe(recipe.id)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
