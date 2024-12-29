// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState(null);

  const handleSearch = async (ingredients) => {
    const response = await axios.get(`http://localhost:3000/api/recipes`, {
      params: { ingredients },
    });
    setRecipes(response.data);
  };

  const handleSelectRecipe = (id) => {
    setSelectedRecipeId(id);
  };

  const handleBack = () => {
    setSelectedRecipeId(null);
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      {selectedRecipeId ? (
        <RecipeDetails recipeId={selectedRecipeId} onBack={handleBack} />
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />
        </>
      )}
    </div>
  );
};

export default App;

