import React from 'react'
import Header from '../components/Header'
// import RecipeDetail from '../components/RecipeDetail'
import Navbar from '../components/Navbar'
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

      {/* Recipes section */}
      {/* <section id="recipes" className='w-full mx-auto'>
        <RecipeDetail />
      </section> */}

      {/* Footer */}
      <Footer />
      
    </main>
  )
}

export default HomePage