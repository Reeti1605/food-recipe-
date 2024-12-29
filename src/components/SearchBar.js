import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');

  const handleSearch = () => {
    onSearch(ingredients);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
