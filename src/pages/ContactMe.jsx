import React from 'react'

const ContactMe = () => {
  return (
    <div className='bg-fondo bg-cover flex w-full h-full justify-center items-end overflow-hidden'>
      <div data-aos="fade-up" data-aos-duration="1500" className='w-full h-[97vh] flex justify-center items-center'>
        <div className='bg-gray-200 shadow rounded-md px-6 py-4 gap-2  md:gap-4 flex flex-col w-9/12 md:w-4/12'>
          <h1 className='flex justify-center font-manrope text-contrast font-semibold text-2xl md:text-4xl'>Contactame</h1>

            <div className='flex items-center font-manrope text-contrast border-b-[1px] border-gray-300'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
              <a className='px-2 md:text-xl' target='_blank' href="https://www.linkedin.com/in/nahuel-vera-48ab86223/">Linkedin</a>
            </div>

            <div className='flex items-center font-manrope text-contrast  border-b-[1px] border-gray-300'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <a className='px-2 md:text-xl' target='_blank' href="mailto:nahuev00@gmail.com?Subject=Contacto%20desde%20Portafolio">Email</a>
            </div>

            <div className='flex items-center font-manrope text-contrast'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
              </svg>
              <a className='px-2 md:text-xl' target='_blank' href="https://walink.co/f10ed0">Whatsapp</a>
            </div>

        </div>
        <div className='flex p-2 bg-contrast fixed bottom-0 w-full justify-center md:justify-start items-center text-fondo text-sm md:text-base'>
          <span className='font-manrope'>Powered By: <a target='_blank' href='https://github.com/nahuelvera00?tab=repositories'>Vera Nahuel</a></span>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github w-6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ContactMe