import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import RecipeSearch from '../components/RecipeSearch'
import Footer from '../components/Footer'

const ExplorePage = () => {
  return (
    <main className='w-full flex flex-col'>

        {/* Navbar */}
        <Navbar />

        {/* Header section */}
        <Header 
        title = {
            <p>Find, Cook, and Enjoy!</p>
        }
        type = 'home'
        />

        {/* Recipes section */}
        <section id="recipes" className='w-full mx-auto'>
            <RecipeSearch />
        </section>

        {/* Footer */}
        <Footer />
      
    </main>
  )
}

export default ExplorePage
