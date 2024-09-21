import React, { useState } from 'react';

const AddRecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [steps, setSteps] = useState('');
    const [formErrors, setFormErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !ingredients.trim() || !steps.trim() || ingredients.split('\n').length < 2) {
            setFormErrors({
                title: !title.trim() ? 'Title is required' : '',
                ingredients: !ingredients.trim() ? 'Ingredients are required' : ingredients.split('\n').length < 2 ? 'At least two ingredients are required' : '',
                steps: !steps.trim() ? 'Preparation steps are required' : ''
            });
        } else {
            console.log({ title, ingredients, steps });
            setFormErrors({});
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <label className="block mb-4">
                Recipe Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full mt-2 p-2 border border-gray-300 rounded-md" />
                {formErrors.title && <div className="text-red-500 mt-1">{formErrors.title}</div>}
            </label>

            <label className="block mb-4">
                Ingredients:
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} className="block w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
                {formErrors.ingredients && <div className="text-red-500 mt-1">{formErrors.ingredients}</div>}
            </label>

            <label className="block mb-4">
                Preparation Steps:
                <textarea value={steps} onChange={(e) => setSteps(e.target.value)} className="block w-full mt-2 p-2 border border-gray-300 rounded-md"></textarea>
                {formErrors.steps && <div className="text-red-500 mt-1">{formErrors.steps}</div>}
            </label>

            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Submit</button>
        </form>
    );
};

export default AddRecipeForm;