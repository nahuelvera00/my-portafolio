import React from 'react'
import { Link } from 'react-router-dom'
import node from '../public/node.png'
import express from '../public/express.png'
import mongodb from '../public/mongodb.png'
import tailwind from '../public/tailwind.png'

const MyLearning2 = () => {
  return (
    <div className='bg-fondo bg-cover flex w-full h-full justify-center items-end overflow-hidden'>
      <div data-aos="fade-left" data-aos-duration="1500" className='w-full h-[97vh] flex justify-center items-center'>
        <div className='bg-gray-200 shadow rounded-md px-1 py-1 gap-1 md:gap-4 flex flex-col md:items-center w-11/12 md:w-10/12 lg:w-7/12'>
          <div className='flex w-full flex-row border-b-[1px] border-gray-300 gap-2 md:gap-5'>
            <div className='flex justify-center items-center w-1/4'>
              <img className='rounded-md md:w-3/4' src={node} alt="" />
            </div>
            <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
              <h1 className='text-sm md:text-2xl w-full flex justify-center font-manrope text-contrast'>NODE.JS</h1>
              <p className='text-xs md:text-xl text-nav font-manrope'>Este entono de Ejecucion lo utilice para poderle dar interaccion a las paginas y noseas paginas con archivos estaticos.</p>
            </div>
          </div>

          <div className='flex w-full flex-row border-b-[1px] border-gray-300 gap-2'>
            <div className='flex justify-center items-center w-1/4'>
              <img className='rounded-md md:w-3/4' src={express} alt="" />
            </div>
            <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
              <h1 className='text-sm md:text-2xl w-full flex justify-center font-manrope text-contrast'>EXPRESS</h1>
              <p className='text-xs md:text-xl text-nav font-manrope'>Este framework lo utilice junto a Node.JS para poder conectar el Backend con la Base de Datos, y poder interactuar entre uno y otro.</p>
            </div>
          </div>

          <div className='flex w-full flex-row border-b-[1px] border-gray-300 gap-2'>
            <div className='flex justify-center items-center w-1/4'>
              <img className='rounded-md md:w-3/4' src={mongodb} alt="" />
            </div>
            <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
              <h1 className='text-sm md:text-2xl w-full flex justify-center font-manrope text-contrast'>MONGODB</h1>
              <p className='text-xs md:text-xl text-nav font-manrope'>Lo utilice para crear Bases de Datos noSQL</p>
            </div>
          </div>

          <div className='flex w-full flex-row gap-2'>
            <div className='flex justify-center items-center w-1/4'>
              <img className='rounded-md md:w-3/4' src={tailwind} alt="" />
            </div>
            <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
              <h1 className='text-sm md:text-2xl w-full flex justify-center font-manrope text-contrast'>TAILWINDCSS</h1>
              <p className='text-xs md:text-xl text-nav font-manrope'>Esta libreria la utlice para dar estilos a las paginas de una forma mas sencilla y resumida</p>
            </div>
          </div>
          <div className='flex justify-center gap-1 flex-row-reverse items-center text-contrast text-sm md:text-xl font-manrope'>
            <Link to='/my-learning-3'>Volver</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
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

export default MyLearning2