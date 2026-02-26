import React, { useState } from 'react'
import { FaBars, FaXmark } from 'react-icons/fa6'

export const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const menuItems = ["Home","About","Skills","Projects","Experience","Contact"];
  return (
    <nav className='fixed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-6 shadow-lg'>

      <div className="container mx-auto flex items-center justify-between">

        {/* Logo */}
        <div>
          <a href="#" className='text-3xl font-bold text-white'>
            Rushiii
            <span className='text-purple'>Chaudhari</span>
          </a>
        </div>


        {/* ALL Menu Items LEFT SIDE */}
        <div className="hidden md:flex items-center space-x-10">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative group inline-block"
            >
              <span className="text-white group-hover:text-purple transition-colors duration-300">
                {item}
              </span>

              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

          <div className="md:hidden">
            { 
            //mobaile menu 
              showMenu ? (      
                <FaXmark className='text-white text-2xl cursor-pointer' onClick={()=>setShowMenu(false)}/>
              ) : (
                <FaBars className='text-white text-2xl cursor-pointer' onClick={()=>setShowMenu(true)} />
              )
            }

            
         </div>
            
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 rounded-lg p-4 flex flex-col items-center space-y-4 justify-center">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setShowMenu(false)}
              className="relative group inline-block"
            >
              <span className="text-white group-hover:text-purple transition-colors duration-300">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}