import React from 'react'
import Navbar from '../components/Navbar'
import CategoryDisplay from '../components/CategoryDisplay'
import Footer from '../components/Footer'

const CategoryPage = () => {
  return (
    <main className='w-full flex flex-col'>

        {/* Navbar */}
        <Navbar />

        {/* Recipes section */}
        <section id="recipes" className='w-full mx-auto mt-6 pt-12'>
            <CategoryDisplay />
        </section>

        {/* Footer */}
        <Footer />
      
    </main>
  )
}

export default CategoryPage
