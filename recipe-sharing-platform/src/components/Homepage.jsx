import React from 'react';
import RecipeList from './RecipeList';
import RecipeCard from './RecipeCard';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen dark:bg-gray-900 p-8">
      <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight text-center text-white">
        Welcome to Recipe World
      </h1>
      <p className="text-lg text-gray-100 text-center mt-4 mb-8">
        Explore your favorite recipes and discover new ones!
      </p>

      {/* Recipe List */}
      <RecipeList />

      {/* Floating Action Button for Adding New Recipe */}
      <button className="fixed bottom-5 right-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full shadow-lg transition duration-300 ease-in-out">
        +
      </button>
    </div>
  );
};

export default HomePage;
