import React from 'react';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const { strMeal, strMealThumb, strArea, strCategory, idMeal } = recipe;

    return (
        <Link to={`/recipes/${idMeal}`} className="w-[150px] flex-grow">
            <div className="bg-gradient-to-b from-neutral-700 to-black shadow-lg w-full rounded-lg">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="rounded-lg h-[100px] md:h-[150px] w-full object-cover"
                />

                <div className="p-3 pt-2">
                    <p className="text-zinc-50 font-semibold">{strMeal}</p>

                    <div className="mt-2 flex flex-wrap gap-1">
                        <span className="px-2 py-1 text-xs capitalize bg-neutral-500 shadow-xl rounded-lg text-stone-200">
                            {strArea || "Unknown Area"}
                        </span>
                        <span className="px-2 py-1 text-xs capitalize bg-neutral-500 shadow-xl rounded-lg text-stone-200">
                            {strCategory || "Unknown Category"}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default RecipeCard;