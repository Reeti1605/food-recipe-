import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(ingredients);
    }
  };

  const handleSearchClick = () => {
    onSearch(ingredients);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Enter ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        onKeyDown={handleKeyDown}
        style={styles.input}
      />
      <button onClick={handleSearchClick} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '10px',
  },
  // Make the input field longer
  input: {
    width: '400px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
};

export default SearchBar;

