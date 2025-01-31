import React, { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Loader from './Loader'
import Search from './Search'
import RecipeCard from './RecipeCard'
import { fetchRecipes } from '../api'

const RecipeSearch = () => {
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
        <div className='w-full bg-neutral-100 px-6 lg:px-12'>
            <div className='w-full flex items-center justify-center pt-12 pb-5 px-5 md:px-12'>
                <form className='w-full' onSubmit={handleSearchedRecipe}>
                    <Search placeholder="Search for any recipe..."
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
                        <div className='w-full m-auto flex justify-center items-center flex-wrap gap-3 px-6 md:px-12 py-4 pb-12 scroll-smooth overflow-y-auto'>
                            {
                                recipes?.map((item, index) => (
                                    <RecipeCard recipe={item} key={index} />))
                            }
                        </div>
                    </>
                ) : <div className='text-neutral-500 w-full items-center justify-center py-10'>
                    <p className='text-center'>No Recipe Found</p>
                </div>
            }
        </div>
    )
}

export default RecipeSearch 