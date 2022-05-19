import React from 'react'
import { Link } from 'react-router-dom'
import yo from '../public/yo.png'
import aos from 'aos'
aos.init()

const AboutMe = () => {
  return (
    <div className='bg-fondo bg-cover flex w-full h-full justify-center items-end overflow-hidden'>
      <div data-aos="fade-up" data-aos-duration="1500" className='w-full h-[95vh] flex justify-center items-center'>
        <div className='bg-gray-200 shadow rounded-md p-3 gap-4 flex flex-col md:items-center md:flex-row w-11/12 md:w-9/12'>
          <div className='flex justify-center items-center md:w-4/12 p-3'>
            <img className='rounded-[50%] w-1/2 md:w-full' src={yo} alt="" /> 
          </div>
          <div className='md:w-full md:flex md:flex-col md:items-center'>
            <div className=''>
              <h1 className='text-contrast text-2xl font-bold justify-center flex md:text-4xl font-manrope pb-1'>Sobre mi</h1>
              <p className='py-1 text-xs text-nav md:flex md:w-full md:justify-start md:text-xl font-manrope'> Tengo 22 años y vivo en Mar del Plata, Buenos Aires, Argentina.</p>
              <p className='text-xs text-nav md:text-xl font-manrope pb-1'>En 2021 comence con Programacion en los momentos libres luego del trabajo, todo por el hecho de solo aprender.
                En Octubre de 2021 decidi dejar mi trabajo para poder tener mas tiempo para mis estudios y aprender mucho mas,
                comenzando a programar un poco mas, ya habia aprendido HTML y CSS, entonces comenzaba el largo camino de aprender JavaScript.
                Al principio solo estaba enfocado en el Frontend, pero con todo ese tiempo libre pude completar varios cursos donde 
                aprendi JavaScript, Node.js, Express, MongoDB, React, JEST y el uso de librerias como React-Router-Dom, Axios, TailwindCSS, Socket.IO
                , y mas...
              </p>
              <p className='text-xs text-nav md:text-xl font-manrope'>
                Luego de varios proyectos y horas programando termine interesandome un poco mas en el Backend, y poder realizar proyectos FullStack.
              </p>
            </div>

          </div>
        </div>

        <div className='flex fixed bottom-2 flex-col items-center text-contrast text-sm md:text-base'>
        <Link
          to='/my-learning'
        >Mi Aprendizaje</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-6 w-4 md:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default AboutMe