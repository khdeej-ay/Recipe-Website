import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipePage = () => {
  const { idMeal } = useParams();  // Get the recipe id from URL params
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    // Fetch the recipe data from TheMealDB API
    const fetchRecipe = async () => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const data = await response.json();
        setRecipeData(data.meals[0]); // Assuming the API returns an array of meals
    };

    fetchRecipe();
  }, [idMeal]);

  if (!recipeData) return <div>Loading...</div>;

  const { strMeal, strMealThumb, strInstructions } = recipeData;
  const ingredients = [];
  
  // Loop through ingredients to create an array
  for (let i = 1; i <= 20; i++) {
    if (recipeData[`strIngredient${i}`]) {
        ingredients.push(`${recipeData[`strIngredient${i}`]} - ${recipeData[`strMeasure${i}`]}`);
    }
  }

  return (
      
    <div className="min-h-screen bg-gray-100 container mx-auto px-6 md:px-20 py-4 md:py-12 mt-12">
        {/* Recipe Header */}
        <div className="mt-4">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="w-full h-[42vh] object-cover rounded-lg shadow-lg"
            />
            <div className='mt-8 mb-8'>
                <h1 className="text-4xl font-bold text-gray-900">{strMeal}</h1>
            </div>
        </div>

        {/* Ingredients Section */}
        <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
            <ul className="list-disc pl-6 mt-4">
                {ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg text-gray-700">{ingredient}</li>
                ))}
            </ul>
        </div>

        {/* Instructions Section */}
        <div>
            <h2 className="text-2xl font-semibold text-gray-800">Instructions</h2>
            <p className="text-lg text-gray-700 mt-4">{strInstructions}</p>
        </div>
    </div>
  );
};

export default RecipePage;