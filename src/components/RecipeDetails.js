import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RecipeDetails = ({ recipeId, onBack }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await axios.get(`http://localhost:4000/api/recipes/details/${recipeId}`);
      setDetails(response.data);
    };

    fetchDetails();
  }, [recipeId]);

  if (!details) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h2>{details.title}</h2>
      <img src={details.image} alt={details.title} width="300" />
      <p>{details.summary}</p>
      <h3>Ingredients:</h3>
      <ul>
        {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
