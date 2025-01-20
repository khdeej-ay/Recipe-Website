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
