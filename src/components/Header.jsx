import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'



const Header = () => {
    const {id} = useParams()

  return (
        <div className={`${window.location.pathname === '/' ? 'text-fondo ' : 'text-contrast '} 
            flex w-full gap-[6px] md:gap-3 justify-center md:justify-end items-center text-xs md:text-xl font-manrope`}>
            <Link
                to='/'
            >{window.location.pathname === '/' ? <u>Inicio</u> : 'Inicio'}</Link>
            <Link
                to='/about-me'
            >{window.location.pathname === '/about-me' ? <u>Sobre Mi</u> : 'Sobre Mi'}</Link>
            <Link
                to='/my-learning'
            >{window.location.pathname === '/my-learning' ? <u>Mi Aprendizaje</u> : 'Mi Aprendizaje'}</Link>
            <Link
                to='/proyects'
            >{window.location.pathname === '/proyects' ? <u>Mis Proyectos</u> : 'Mis Proyectos'}</Link>
            <Link
                to='/contact-me'
            >{window.location.pathname === '/contact-me' ? <u>Contactame</u> : 'Contactame'}</Link>
        </div>
  )
}

export default Header