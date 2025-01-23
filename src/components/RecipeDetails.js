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
    <div style={styles.container}>
      <button style={styles.backButton} onClick={onBack}>
        Back
      </button>

      <h2 style={styles.title}>{details.title}</h2>

      <div style={styles.imageContainer}>
        <img
          src={details.image}
          alt={details.title}
          style={styles.image}
        />
      </div>

      {/* Render HTML from the API's 'summary' field */}
      <div
        style={styles.summary}
        dangerouslySetInnerHTML={{ __html: details.summary }}
      />

      <h3 style={styles.sectionTitle}>Ingredients:</h3>
      <ul style={styles.ingredientList}>
        {details.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  backButton: {
    padding: '8px 16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  title: {
    fontSize: '28px',
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  },
  imageContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    maxWidth: '100%',   // Ensures responsiveness
    height: 'auto',
    borderRadius: '8px',
  },
  summary: {
    marginBottom: '20px',
    lineHeight: '1.6',
    color: '#555',
  },
  sectionTitle: {
    fontSize: '22px',
    marginTop: '30px',
    marginBottom: '10px',
    color: '#333',
  },
  ingredientList: {
    textAlign: 'left',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '600px',
    lineHeight: '1.6',
  },
};

export default RecipeDetails;
