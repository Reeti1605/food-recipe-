// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import SearchBar from './components/SearchBar';
// import RecipeList from './components/RecipeList';
// import RecipeDetails from './components/RecipeDetails';

// const App = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [selectedRecipeId, setSelectedRecipeId] = useState(null);

//   // Reference to scroll into the recipe list section
//   const recipeListRef = useRef(null);

//   const handleSearch = async (ingredients) => {
//     const response = await axios.get(`http://localhost:4000/api/recipes`, {
//       params: { ingredients },
//     });
//     setRecipes(response.data);

//     // Smooth scroll to the list once results are ready
//     if (recipeListRef.current) {
//       recipeListRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleSelectRecipe = (id) => {
//     setSelectedRecipeId(id);
//   };

//   const handleBack = () => {
//     setSelectedRecipeId(null);
//   };

//   return (
//     <div>
//       {/* Show the hero section only if no recipe is selected */}
//       {!selectedRecipeId && (
//         <div style={styles.hero}>
//           <div style={styles.centerTextContainer}>
//             {/* Dynamic text in the middle */}
//             <h1 style={styles.heroText}>Find Your Perfect Recipe</h1>
//           </div>
//           <div style={styles.bottomSearch}>
//             {/* Search bar at the bottom of the screen/hero */}
//             <SearchBar onSearch={handleSearch} />
//           </div>
//         </div>
//       )}

//       {/* Show details if a recipe is selected */}
//       {selectedRecipeId ? (
//         <RecipeDetails recipeId={selectedRecipeId} onBack={handleBack} />
//       ) : (
//         // The list of recipe suggestions (scroll target)
//         <div ref={recipeListRef}>
//           {recipes.length > 0 && (
//             <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   // hero: {
//   //   height: '100vh',             // Full screen height
//   //   display: 'flex',
//   //   flexDirection: 'column',
//   //   position: 'relative',
//   //   backgroundColor: '#f5f5f5',
//   // },
//   hero: {
//     height: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'relative',
//     background: "url('/image.jpg') center center no-repeat",
//     backgroundSize: 'cover',
//   },
//   centerTextContainer: {
//     // This pushes the text into the vertical center
//     flex: 1,
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heroText: {
//     fontSize: '48px',
//     margin: 0,
//     textAlign: 'center',
//   },
//   bottomSearch: {
//     // Places the search bar near the bottom
//     marginBottom: '40px',
//     display: 'flex',
//     justifyContent: 'center',
//   },
// };

// export default App;

import React, { useState, useRef } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  // Reference for smooth scrolling
  const recipeListRef = useRef(null);

  const handleSearch = async (ingredients) => {
    // Fetch recipes from your backend
    const response = await axios.get('http://localhost:4000/api/recipes', {
      params: { ingredients },
    });
    setRecipes(response.data);

    // Scroll to the recipe list (if it exists)
    if (recipeListRef.current) {
      recipeListRef.current.scrollIntoView({ behavior: 'smooth' });
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
      {/* Hero section only visible if no recipe is selected */}
      {!selectedRecipeId && (
        <div style={styles.hero}>
          <h1 style={styles.heroText}>Find Your Perfect Recipe</h1>
          <div style={styles.searchContainer}>
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
      )}

      {/* Either show details or the recipe list */}
      {selectedRecipeId ? (
        <RecipeDetails recipeId={selectedRecipeId} onBack={handleBack} />
      ) : (
        <div ref={recipeListRef}>
          {recipes.length > 0 && (
            <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />
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
    justifyContent: 'center',       // Centers both text and search bar vertically
    alignItems: 'center',           // Centers horizontally
    background: "url('/image.jpg') center center no-repeat", // <-- Your local image
    backgroundSize: 'cover',
  },
  heroText: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: '48px',
    fontWeight: '700',
    margin: 0,
    textAlign: 'center',
    color: '#fff', // Light text for a typical dark background image
  },
  searchContainer: {
    marginTop: '20px', // Small gap between the text and the search bar
  },
};

export default App;

