import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';
import RecipeList from './RecipeList';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen dark:bg-gray-900 p-8">
      <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-center text-white">
        Welcome to Recipe World
      </h1>
      <p className="text-lg text-gray-100 text-center mt-4 mb-8">
        Explore your favorite recipes and discover new ones!
      </p>

      {/* Displaying recipes using map and grid layout, including the "sm" class */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map(recipe => (
          <div key={recipe.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="font-bold text-xl">{recipe.title}</h2>
            <p className="mt-2 text-gray-600">{recipe.summary}</p>
          </div>
        ))}
      </div>

      {/* Recipe List */}
      <RecipeList />

      {/* Floating Action Button for Adding New Recipe */}
      <Link to="/add-recipe">
      <button className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-300 ease-in-out">
        +
      </button>
      </Link>
    </div>
  );
};

export default HomePage;
