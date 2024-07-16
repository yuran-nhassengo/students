import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button';

export const NavBar = () => {

  const activeStyles = "text-blue-400";
  const inactiveStyles = "text-white";

  return (
    <div className='shadow-md w-full  top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-blue-900 py-4 md:px-10 px-7 '>
        <div className='font-bold text-2x1 cursor-pointer
        flex items-center font-[Poppins]'>
          <span className='text-3xl text-indigo-600 mr-1 pt-1'>
            Logo
          </span>
        </div>
        
          <div className='md:ml-8 text-xl md: space-x-4 '>
          <NavLink to={'/'} className={({isActive}) => `${isActive?activeStyles:inactiveStyles} hover:text-blue-200`}>Home</NavLink>
          <NavLink to={'/student-list-page'} className={({isActive}) => `${isActive?activeStyles:inactiveStyles} hover:text-blue-200`}>Student</NavLink>
          <NavLink to={'/contact-form'} className={({isActive}) => `${isActive?activeStyles:inactiveStyles} hover:text-blue-200`}>Contact</NavLink>
           {/* <Button>
            Get Started
           </Button> */}
          </div>
      </div>
    </div>
  )
}

