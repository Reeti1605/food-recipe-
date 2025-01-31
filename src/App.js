import React, { useState, useRef } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);
  const [page, setPage] = useState(1); // Track current page
  const [hasMore, setHasMore] = useState(true); // Track if more recipes are available

  const recipeListRef = useRef(null);

  const handleSearch = async (ingredients) => {
    const response = await axios.get('http://localhost:4000/api/recipes', {
      params: { ingredients, page: 1 }, // Always start from page 1 on new search
    });
    setRecipes(response.data);
    setPage(1); // Reset page to 1
    setHasMore(true); // Reset hasMore flag

    if (recipeListRef.current) {
      recipeListRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const response = await axios.get('http://localhost:4000/api/recipes', {
      params: { ingredients: '', page: nextPage }, // Pass the current search query
    });

    if (response.data.length > 0) {
      setRecipes((prev) => [...prev, ...response.data]); // Append new recipes
      setPage(nextPage); // Update current page
    } else {
      setHasMore(false); // No more recipes to load
    }
  };

  const handleSelectRecipe = (id) => {
    setSelectedRecipeId(id);
  };

  const handleBack = () => {
    setSelectedRecipeId(null);
  };

  return (
    <div>
      {!selectedRecipeId && (
        <div style={styles.hero}>
          <h1 style={styles.heroText}>Find Your Perfect Recipe</h1>
          <div style={styles.searchContainer}>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      )}

      {selectedRecipeId ? (
        <RecipeDetails recipeId={selectedRecipeId} onBack={handleBack} />
      ) : (
        <div ref={recipeListRef}>
          {recipes.length > 0 && (
            <RecipeList
              recipes={recipes}
              onSelectRecipe={handleSelectRecipe}
              onLoadMore={handleLoadMore}
              hasMore={hasMore}
            />
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  hero: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: "url('/image.jpg') center center no-repeat",
    backgroundSize: 'cover',
  },
  heroText: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: '48px',
    fontWeight: '700',
    margin: 0,
    textAlign: 'center',
    color: '#fff',
  },
  searchContainer: {
    marginTop: '20px',
  },
};

export default App;