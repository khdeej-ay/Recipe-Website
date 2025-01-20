import React from 'react'
import Navbar from '../components/Navbar'
import RecipeInfo from '../components/RecipeInfo'
import Footer from '../components/Footer'

const RecipePage = () => {
  return (
    <div>
      <main className='w-full flex flex-col'>

        {/* Navbar */}
        <Navbar />

        {/* Recipe Info section */}
        <section id="recipe-info" className='w-full mx-auto'>
          <RecipeInfo />
        </section>

        {/* Footer */}
        <Footer />

      </main>
    </div>
  )
}

export default RecipePage
