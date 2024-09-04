import React from 'react';
import useRecipeStore from './recipeStore'; // Adjust the import path

const SearchBar = () => {
  const { searchTerm, setSearchTerm, filterRecipes } = useRecipeStore();

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    filterRecipes(newSearchTerm); // Trigger the filtering action
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={handleSearchChange}
    />
  );
};

export default SearchBar;