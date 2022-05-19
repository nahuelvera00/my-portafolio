import React from 'react'
import { Link } from 'react-router-dom'
import html from '../public/html.png'
import css from '../public/css.png'
import javascript from '../public/javascript.png'
import react from '../public/react.png'

const MyLearning = () => {
  return (
    <div className='bg-fondo bg-cover flex w-full h-full justify-center items-end overflow-hidden'>
      <div data-aos="fade-up" data-aos-duration="1500" className='w-full h-[97vh] flex justify-center items-center'>
        <div className='bg-gray-200 shadow rounded-md px-1 py-1 gap-1 md:gap-4 flex flex-col md:items-center w-11/12 md:w-7/12'>
          <h1 className='flex justify-center font-manrope text-contrast font-semibold md:text-4xl'>Mi aprendizaje</h1>

          <div className='flex w-full flex-row border-b-[1px] border-gray-300 gap-2 md:gap-5'>
            <div className='flex justify-center items-center w-1/4'>
              <img className='rounded-md md:w-3/4' src={html} alt="" />
            </div>
            <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
              <h1 className='text-sm md:text-2xl w-full flex justify-center font-manrope text-contrast'>HTML</h1>
              <p className='text-xs md:text-xl text-nav font-manrope'>Este fue el primer Lenguaje que aprendi, en el cual aprendi lo basico
               como la apertura y cierra de una etiqueta, sus propiedades, la estructura de una pagina, como importar estilos, fuentes, etc...</p>
            </div>
          </div>

          <div className='flex w-full flex-row border-b-[1px] border-gray-300 gap-2'>
            <div className='flex justify-center items-center w-1/4'>
              <img className='rounded-md md:w-3/4' src={css} alt="" />
            </div>
            <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
              <h1 className='text-sm md:text-2xl w-full flex justify-center font-manrope text-contrast'>CSS</h1>
              <p className='text-xs md:text-xl text-nav font-manrope'>Este fue uno de los lenguajes que mas me gusto aprender, con 
              el podia dar estilos a mis paginas, personalizarlas y mas. Luego le sume librerias como Bootstrap y TailwindCSS .</p>
            </div>
          </div>

          <div className='flex w-full flex-row border-b-[1px] border-gray-300 gap-2'>
            <div className='flex justify-center items-center w-1/4'>
              <img className='rounded-md md:w-3/4' src={javascript} alt="" />
            </div>
            <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
              <h1 className='text-sm md:text-2xl w-full flex justify-center font-manrope text-contrast'>JAVASCRIPT</h1>
              <p className='text-xs md:text-xl text-nav font-manrope'>Este lenguaje fue el que mas me gusto al ver toda la funcionalidad 
              que podia darle a una pagina y mas con el uso Node.JS, Express, MongoDB, Sequelize y React.JS .</p>
            </div>
          </div>

          <div className='flex w-full flex-row gap-2'>
            <div className='flex justify-center items-center w-1/4'>
              <img className='rounded-md md:w-3/4' src={react} alt="" />
            </div>
            <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
              <h1 className='text-sm md:text-2xl w-full flex justify-center font-manrope text-contrast'>REACT</h1>
              <p className='text-xs md:text-xl text-nav font-manrope'>Terminado el curso de JS donde habia aprendido a usar este lenguaje,
               decidi ampliar mi conocimiento sobre el en un curso centrado principalmente en el mismo.</p>
            </div>
          </div>

        </div>
        <div className='flex fixed bottom-2 flex-col items-center text-contrast text-sm md:text-base'>
          <Link
            to='/proyects'
          >Mis Proyectos</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-6 w-4 md:w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default MyLearning