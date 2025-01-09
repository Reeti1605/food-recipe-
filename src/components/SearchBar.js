import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');

  const handleSearch = () => {
    onSearch(ingredients);
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        placeholder="Enter ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSearch} style={styles.button}>
        Search
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // Center vertically and span full screen height
    gap: '10px', // Space between input and button
    flexDirection: 'row', // Keep input and button side by side
    padding: '0 20px', // Add some padding for smaller screens
  },
  input: {
    width: '50%', // Broader input field
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow for better aesthetics
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
    transition: 'background-color 0.3s ease', // Smooth hover effect
  },
};

export default SearchBar;

