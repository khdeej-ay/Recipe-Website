import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the category from the URL
import RecipeCard from './RecipeCard'; // Assuming you already have the RecipeCard component

const RecipeCategoryPage = () => {
    const { categoryName } = useParams(); // Get the category name from the URL
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
                );
                const data = await response.json();
                setRecipes(data.meals); // Assuming the API returns an array of meals
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, [categoryName]); // Re-fetch recipes if the category changes

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">
                    Recipes in {categoryName}
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {recipes && recipes.length > 0 ? (
                        recipes.map((recipe) => (
                            <RecipeCard key={recipe.idMeal} recipe={recipe} />
                        ))
                    ) : (
                        <div className="col-span-4 text-center text-xl text-gray-500">
                            No recipes found in this category.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecipeCategoryPage;