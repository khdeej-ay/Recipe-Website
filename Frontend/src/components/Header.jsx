import React from 'react'
import { Carousel_1, Carousel_2, Carousel_3, Carousel_4, Carousel_5, Carousel_6 } from "../media";

const carouselArray = [Carousel_1, Carousel_2, Carousel_3, Carousel_4, Carousel_5, Carousel_6];

const Header = ({ title, image, type }) => {
  return (
    <div className='w-full h-[100vh]'>
        
        {/* Carousel to display images */}
        <div className='relative w-full h-full'>
            <img src={image ?? carouselArray[Math.floor(Math.random() * carouselArray.length)]}
            alt='Hero Image'
            className='w-full h-full object-cover'
            />
        </div>
        <div className='absolute w-full h-full bg-gradient-to-t from-[black] to-transparent top-0 z-8 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4 md:px-20'>
        <h1 className='text-[#EEEEEE] text-4xl md:text-5xl font-bold text-center'>{title}</h1>
        {
          type && (
            <p className='text-md mt-4 text-center text-[#FEE9D7] px-6 py-4 rounded-box '>Discover Delectable Recipes, One at a Time! 
              <br className='hidden md:block' /> Explore, save, and savor meals from around the world. Mouthwatering dishes for any occasion—right at your fingertips!</p>
          )
        }
      </div>
      
    </div>
  )
}

export default Header
