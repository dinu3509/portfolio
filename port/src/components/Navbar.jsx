import React, { useContext } from 'react';
import { useState,useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from './ThemeContext';
import { DarkMode } from './Button';
const Navbar = () => {
    const[state,setState] = useState(false)
    const { dm, toggleMode } = useContext(ThemeContext);
    const changeMode =() =>{
      toggleMode(!dm)
      console.log(dm)
    }
    const stateChanger=()=>{
        setState(!state)
        console.log(state);        
    }
    const stateChanger2 = () =>{
      if(state==true){
        setState(!state)
      }
    }

  return (
    <div className={`${dm?"dark":" "} flex items-center d z-10`}>
        <div className="md:hidden  flex items-center justify-center rounded-lg p-1 active:backdrop:blur-3xl active:scale-105  transition-all text-black">
            <button onClick={stateChanger} className='flex '>            
                <span class={`dark:text-white material-symbols-rounded ${state ? 'hidden' : ''}`}>menu</span>
            <span class={`dark:text-white material-symbols-rounded ${state ? '' : 'hidden'}`}>cancel</span>
            </button>

</div>
            <div className={`navbar absolute right-0 top-20 text-center mr-5 ${state ? '' : 'hidden'} md:flex md:static dark:bg-[#EFEFED] rounded-2xl z-10`}>
                <ul className='md:flex gap-5 bg-gradient-to-b from-sky-400/20 to-sky-400/10 md:bg-none backdrop-blur-lg shadow-2xl z-0 rounded-xl p-2'>
            {['About','Profile','Skills'].map((item)=>(
                <li
                key={item}
                className="relative px-4 rounded-lg transition duration-300 text-black md:text-black md:py-1 py-2 my-1"
              >
                <NavLink
                  to={`#${item.toLowerCase()}`}
                  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
                  style={{ zIndex: 20 }} 
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation behavior
                    const targetElement = document.getElementById(item.toLowerCase());
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                    stateChanger2(); // Close the menu if open
                  }}>
                  {item}
                </NavLink>
                <div
                  className="active-box absolute top-0 left-0 -z-10 h-full w-full pointer-events-none"
                ></div>
              </li>
            ))}</ul></div>
        
      <DarkMode onClick={changeMode}>
        
      </DarkMode>
    </div>
  )
}

export default Navbar
