import React from 'react'
import { useState,useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const[state,setState] = useState(false)

    const lastActiveLink = useRef();
    const activeBox =useRef();
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
    <div>
        <div className="md:hidden border flex items-center justify-center rounded-lg p-1 active:backdrop:blur-3xl active:scale-105  transition-all text-black">
            <button onClick={stateChanger} className='flex '>            
                <span class={`material-symbols-rounded ${state ? 'hidden' : ''}`}>menu</span>
            <span class={`material-symbols-rounded ${state ? '' : 'hidden'}`}>cancel</span>
            </button>

</div>
            <div className={`navbar absolute right-0 top-20 text-center mr-5 ${state ? '' : 'hidden'} md:flex md:static `}>
                <ul className='md:flex gap-5 bg-gradient-to-b from-sky-800/10 to-sky-400/10 md:bg-none backdrop-blur-lg shadow-2xl z-0 rounded-xl p-2'>
            {['About','Education','Skills'].map((item)=>(
                <li
                key={item}
                className="relative px-4 rounded-lg transition duration-300 md:text-black md:py-1 py-2 my-1"
              >
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")}
                  style={{ zIndex: 20 }} 
                 onClick={stateChanger2}>
                  {item}
                </NavLink>
                <div
                  className="active-box absolute top-0 left-0 -z-10 h-full w-full pointer-events-none"
                ></div>
              </li>
            ))}</ul></div>
        
      
    </div>
  )
}

export default Navbar
