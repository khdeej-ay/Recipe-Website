import React from 'react'
import Navbar from '../components/Navbar'
import RecipeSearch from '../components/RecipeSearch'
import Footer from '../components/Footer'

const ExplorePage = () => {
  return (
    <main className='w-full flex flex-col'>

        {/* Navbar */}
        <Navbar />

        {/* Recipes section */}
        <section id="recipes" className='w-full mx-auto mt-6 pt-12'>
            <RecipeSearch />
        </section>

        {/* Footer */}
        <Footer />
      
    </main>
  )
}

export default ExplorePage
