import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { fetchCategories } from '../api';

const Categories = ({ fetchCategories }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const data = await fetchCategories(); // Function to fetch categories from theMealDB API
                setCategories(data.categories);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategoryData();
    }, [fetchCategories]);

    return (
        <div className="w-full bg-black pt-10 pb-8 px-4 md:px-12 lg:px-15">
            <h2 className="text-white text-xl lg:text-2xl font-bold text-center mb-4">
                Explore Categories
            </h2>
            <div className="flex gap-4 lg:gap-12 overflow-x-auto scrollbar-hide py-4 px-4">
                {categories.map((category) => (
                    <Link
                        key={category.idCategory}
                        to={`/category/${category.strCategory}`} // Navigate to the category page
                        className="flex-shrink-0 w-[100px] text-center"
                    >
                        <div className="w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] rounded-full overflow-hidden mx-auto bg-gray-200 shadow-lg">
                            <img
                                src={category.strCategoryThumb || "placeholder.jpg"}
                                alt={category.strCategory}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-white text-sm mt-3 lg:ml-4">
                            {category.strCategory}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
