export const fetchRecipes = async ({ query }) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();
        return data.meals || []; // Return an empty array if no results are found
    } catch (error) {
        console.error("Error fetching recipes:", error);
        throw error;
    }
}; 

export const fetchCategories = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    if (!response.ok) {
        throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data;
};

// export const fetchRandomRecipe = async (ingredient) => {
//     const response = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
//     );
//     if (!response.ok) {
//         throw new Error('Failed to fetch recipes');
//     }
//     const data = await response.json();

//     // If no meals are returned
//     if (!data.meals || data.meals.length === 0) return null;

//     // Fetch detailed recipe for one random meal
//     const randomMeal = data.meals[Math.floor(Math.random() * data.meals.length)];
//     const detailResponse = await fetch(
//         `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMeal.idMeal}`
//     );
//     const detailData = await detailResponse.json();
//     return detailData;
// };

export const fetchRandomRecipe = async (ingredient) => {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    return await response.json();
};
