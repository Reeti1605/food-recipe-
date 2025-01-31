import React from 'react';

const RecipeList = ({ recipes, onSelectRecipe, onLoadMore, hasMore }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Recipes</h2>
      <div style={styles.cardContainer}>
        {recipes.map((recipe) => (
          <div key={recipe.id} style={styles.card}>
            <img
              src={recipe.image}
              alt={recipe.title}
              style={styles.image}
            />
            <h3 style={styles.title}>{recipe.title}</h3>
            <button
              onClick={() => onSelectRecipe(recipe.id)}
              style={styles.button}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <button onClick={onLoadMore} style={styles.loadMoreButton}>
          Load More
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    textAlign: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '300px',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '18px',
    margin: '10px 0',
    color: '#555',
  },
  button: {
    marginTop: 'auto',
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  loadMoreButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default RecipeList;