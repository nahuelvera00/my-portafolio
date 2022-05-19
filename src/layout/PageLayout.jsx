import React from 'react'
import { Outlet } from 'react-router-dom'

//Components
import Header from '../components/Header'

const PageLayout = () => {
  return (
    <div className='h-screen'>
        <div className='flex fixed w-full h-[5vh] md:px-6'>
          <Header />
        </div>
        <main className='h-full w-full flex justify-center items-center'>
            <Outlet/>
        </main>
    </div>
  )
}

export default PageLayout