import React from 'react'
import { Link } from 'react-router-dom'
import agenciaViajes from '../public/agenciaViajes.png'
import gestorDePacientes from '../public/gestorDePacientes.png'
import upTask from '../public/upTask.png'

const Proyects = () => {
  return (
    <div className='bg-fondo bg-cover flex w-full h-full justify-center items-end overflow-hidden'>
    <div data-aos="fade-up" data-aos-duration="1500" className='w-full h-[97vh] flex justify-center items-center'>
      <div className='bg-gray-200 shadow rounded-md px-1 py-1 gap-2 md:gap-4 flex flex-col md:items-center w-11/12 md:w-7/12'>

        <div className='flex w-full flex-row border-b-[1px] border-gray-300 gap-2 md:gap-5'>
          <div className='flex px-1 justify-center flex-col md:flex-row gap-1 md:gap-4 items-center w-1/3'>
            <img className='rounded-md md:w-3/4' src={agenciaViajes} alt="" />
            <div className='flex gap-2 md:flex-col'>
              <a target='_blank' href="https://frozen-tor-93594.herokuapp.com/">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-view-360 w-8 md:w-12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <ellipse cx="12" cy="12" rx="4" ry="9" />
                  <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(90 12 12)" />
                </svg>
              </a>
              <a target='_blank' href="https://github.com/nahuelvera00/AgenciaViajes">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github w-8 md:w-12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </div>
          </div>
          <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
            <p className='text-xs md:text-xl text-nav font-manrope'><span className='text-contrast font-semibold'>Agencia de Viajes:</span> Esta pagina fue desarrolada con Node.JS, Express, Sequelize 
            y PugCSS. Cuenta con su pagina de Inicio, Apartado de Servicios y Testimoniales. Sus datos se almacenan en una BD MySQL.</p>
          </div>
        </div>
        
        <div className='flex w-full flex-row border-b-[1px] border-gray-300 gap-2 md:gap-5'>
          <div className='flex px-1 justify-center flex-col md:flex-row gap-1 md:gap-4 items-center w-1/3'>
            <img className='rounded-md md:w-3/4' src={gestorDePacientes} alt="" />
            <div className='flex gap-2 md:flex-col'>
              <a target='_blank' href="https://neon-palmier-6c347b.netlify.app/">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-view-360 w-8 md:w-12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <ellipse cx="12" cy="12" rx="4" ry="9" />
                  <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(90 12 12)" />
                </svg>
              </a>
              <a target='_blank' href="https://github.com/nahuelvera00/APV_MERN_frontend">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github w-8 md:w-12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </div>
          </div>
          <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
            <p className='text-xs md:text-xl text-nav font-manrope'><span className='text-contrast font-semibold'>Gestor de Pacientes:</span> Este Proyecto fue creado con Node.JS, Express, MongoDB, React.JS y TailwindCSS, 
            este proyecto cuenta con funcionalidades como: Crear, editar y Eliminar un Paciente, recuperar y/o cambiar Contraseña, Validacion por Email, y mas...</p>
          </div>
        </div>

        <div className='flex w-full flex-row gap-2 md:gap-5'>
          <div className='flex px-1 justify-center flex-col md:flex-row gap-1 md:gap-4 items-center w-1/3'>
            <img className='rounded-md md:w-3/4' src={upTask} alt="" />
            <div className='flex md:flex-col gap-2'>
              <a target='_blank' href="https://bucolic-moonbeam-d8ce3f.netlify.app/">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-view-360 w-8 md:w-12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <ellipse cx="12" cy="12" rx="4" ry="9" />
                  <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(90 12 12)" />
                </svg>
              </a>
              <a target='_blank' href="https://github.com/nahuelvera00/UpTask_FrontEnd">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github w-8 md:w-12" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </div>
          </div>
          <div className='flex flex-col w-3/4 pb-1 md:pb-2 md:px-3'>
            <p className='text-xs md:text-xl text-nav font-manrope'><span className='text-contrast font-semibold'>UpTask:</span> Es un gestor de Proyectos, el cual permite 
            crear, editar, y eliminar Proyectos, agregarle, editar, completar y eliminar Tareas, agregar Colaboradores. El proyecto fue creado con Node.js, Express, MongoDB, React.JS,
            TaildinwCSS e incorpora Socket.io para su actualizacion en Tiempo Real.</p>
          </div>
        </div>

      </div>
      <div className='flex fixed bottom-2 flex-col items-center text-contrast text-sm md:text-base'>
        <Link
          to='/contact-me'
        >Contactame</Link>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 md:h-6 w-4 md:w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
  )
}

export default Proyects