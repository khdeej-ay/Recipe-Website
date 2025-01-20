import React, { useState } from 'react';
import Search from './Search';
import { BiSearchAlt2 } from 'react-icons/bi';

const Generator = ({ fetchRandomRecipe }) => {
    const [query, setQuery] = useState('');
    const [recipe, setRecipe] = useState(null);
    const [instructions, setInstructions] = useState(
        'Search for an ingredient to generate a random recipe.'
    );

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = async (e) => {
      e.preventDefault();
  
      if (!query.trim()) {
          alert('Please enter an ingredient!');
          return;
      }
  
      try {
          console.log('Query:', query); // Debug the query
          const data = await fetchRandomRecipe(query);
          console.log('Response:', data); // Inspect API response
  
          if (data && data.meals) {
              const randomRecipe = data.meals[0]; // Assuming meals array exists
              const recipeDetails = await fetch(
                  `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomRecipe.idMeal}`
              ).then((res) => res.json());
  
              console.log('Full Recipe Details:', recipeDetails); // Debug full recipe
              setRecipe(recipeDetails.meals[0]);
              setInstructions(''); // Clear initial instructions
          } else {
              setInstructions('No recipe found for the provided ingredient.');
              setRecipe(null); // Clear previous recipe
          }
      } catch (error) {
          console.error('Error fetching recipe:', error);
          setInstructions('Something went wrong. Please try again.');
          setRecipe(null); // Clear previous recipe
      }
    };
  
    return (
        <div className="w-full h-[93vh] flex">
            <div className="w-full h-full flex flex-col p-6 pb-12 bg-neutral-100">
                {/* Search Bar */}
                <div className="w-full flex items-center justify-center pt-8 pb-5 px-5 md:px-12">
                    <form className="w-full mb-6" onSubmit={handleSearch}>
                        <Search
                            placeholder="Search for a random ingredient"
                            handleInputChange={handleChange}
                            rightIcon={
                                <BiSearchAlt2
                                    className="text-gray-600 cursor-pointer"
                                    onClick={handleSearch}
                                />
                            }
                        />
                    </form>
                </div>

                {/* Random Recipe Generated */}
                <div className="overflow-y-auto text-black pb-5 px-5 md:px-12">
                    {recipe ? (
                        <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-center text-center">
                            {/* Recipe Image */}
                            <div className='self-start'>
                              <img
                                  src={recipe.strMealThumb}
                                  alt={recipe.strMeal}
                                  className="w-[400px] rounded-2xl mb-4 object-cover"
                              />
                            </div>

                            {/* Random Recipe Ingredients and Instructions */}
                            <div className='md:w-1/2'>
                              {/* Recipe Title */}
                              <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>

                              {/* Ingredients */}
                              <h3 className="text-lg text-left font-semibold mb-2">Ingredients:</h3>
                              <ul className="mb-4 text-left">
                                  {Object.keys(recipe)
                                      .filter((key) => key.startsWith('strIngredient') && recipe[key])
                                      .map((key, index) => (
                                          <li key={index} className="mb-1">
                                              {recipe[key]} - {recipe[`strMeasure${key.slice(13)}`]}
                                          </li>
                                      ))}
                              </ul>

                              {/* Instructions */}
                              <h3 className="text-lg text-left font-semibold mt-6 mb-2">Instructions:</h3>
                              <p className="text-justify">{recipe.strInstructions}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-black text-lg">{instructions}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Generator;