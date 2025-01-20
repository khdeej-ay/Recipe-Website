import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Loader from './Loader'
import Search from './Search'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../api'
import Button from './Button'

const RecipeDetail = () => {
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('Chicken')
    const [limit, setLimit] = useState(3)
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    const fetchRecipe = async () => {
        try {
            const data = await fetchRecipes({ query, limit })

            setRecipes(data)

            setLoading(false)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const handleSearchedRecipe = async (e) => {
        e.preventDefault()
        fetchRecipe()
    }

    useEffect(() => {
        setLoading(true)

        fetchRecipe()

    }, [])

    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <div className='w-full h-[93vh] bg-neutral-100'>
            <div className='w-full flex items-center justify-center pt-12 pb-5 px-5 md:px-20'>
                <form className='w-full' onSubmit={handleSearchedRecipe}>
                    <Search placeholder="Search for a recipe"
                        handleInputChange={handleChange}
                        rightIcon={
                            <BiSearchAlt2 className='text-gray-600' onClick={handleSearchedRecipe} />
                        }
                    />
                </form>

            </div>

            {
                recipes?.length > 0 ? (
                    <>
                        <div className='w-full max-h-[60vh] lg:max-h-[70vh] xl:max-h-[75vh] m-auto flex justify-center items-center flex-wrap gap-3 lg:px-10 py-4 scroll-smooth overflow-y-auto'>
                            {
                                recipes?.map((item, index) => (
                                    <RecipeCard recipe={item} key={index} />))
                            }
                        </div>

                        {/* <div className='flex w-full items-center justify-center py-10'>

                            <Button
                                title="Show More"
                                containerStyle="bg-green-800 text-white px-3 py-1 rounded-full text-sm"
                                handleClick={showMore}
                            />
                        </div> */}
                    </>
                ) : <div className='text-neutral-500 w-full items-center justify-center py-10'>
                    <p className='text-center'>No Recipe Found</p>
                </div>
            }
        </div>
    )
}

export default RecipeDetail