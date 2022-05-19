import React from 'react'
import { Link } from 'react-router-dom'
import aos from 'aos'
aos.init()

const Welcome = () => {
  return (
    <div className='bg-welcome-background bg-cover flex w-full h-full justify-center items-end overflow-hidden'>
      <div data-aos="zoom-in" data-aos-duration="1500" className='w-full h-[95vh] flex justify-center items-center'>
        <div>
          <p className='text-white text-5xl md:text-7xl font-manrope font-semibold'>Hola</p>
          <p className='text-xl text-white md:text-2xl font-manrope'>soy Nahuel</p>
        </div>
        <div className='flex fixed bottom-2 flex-col items-center text-white text-sm md:text-base'>
        <Link
          to='/about-me'
        >Sobre mi</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-6 w-4 md:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Welcome