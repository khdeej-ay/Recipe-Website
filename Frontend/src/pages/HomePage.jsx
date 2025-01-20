import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { fetchCategories, fetchRandomRecipe } from '../api'
import Generator from '../components/Generator'
import Footer from '../components/Footer'

const HomePage = () => {
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

      {/* Category section */}
      <section id="category" className='w-full mx-auto'>
        <Categories fetchCategories={fetchCategories} />
      </section>

      {/* Random Recipe Generator */}
      <section id="random" className='w-full mx-auto'>
        <Generator fetchRandomRecipe={fetchRandomRecipe} />
      </section>

      {/* Footer */}
      <Footer />
      
    </main>
  )
}

export default HomePage