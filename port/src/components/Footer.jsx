import React, { useContext } from 'react'
import { insta,twitter,github,linkedin, leet } from '../assets';
import { ThemeContext } from './ThemeContext'
import { NavLink } from 'react-router-dom';


const Footer = () => {
    const {dm} = useContext(ThemeContext)
    const social = 
    [{name:"twitter",img:twitter,link:`https://x.com/monkeyDreddy05`},
        {name:"insta",img:insta,link:`https://www.instagram.com/dinesh03544/`},
        {name:'linkedin',img:linkedin,link:`https://www.linkedin.com/in/dinesh-reddy-dharmala-778429281/

`},
        {name:"github",img:github,link:`https://github.com/dinu3509`},             
        {name:"leet",img:leet,link:`https://leetcode.com/u/dinu3509/`}];



  return (
    <section className={`${dm? "dark ": " "}`}>
      <div className={`mx-auto  backdrop-blur-sm ${dm? "aa": "shadow-lg"} rounded-t-2xl py-6`}>
    <div className={`   flex flex-col lg:flex-row items-center justify-center lg:justify-around`}>
        <ul className='flex gap-4 justify-center min-h-14 max-h-28   '>
        {social.map((item)=>(
        
        <li key={item.name} className='flex justify-center items-center list-none h-full relative mx-7  md:mx-10'>
           
                <div className=" h-full absolute top-1/4 w-12   hover:scale-105 transition-all duration-300 ease-in-out">
                <a href={item.link} target='_blank'>
                <div className="ic bg-transparent border p-2 rounded-full shadow-xl dark:bg-white ">
                    
                    <img src={item.img} width={35} className='' />
                    </div>
                </a>
                
                </div>
            
           
            
        </li>
      ))}
        </ul>
        <ul className='flex gap-5 bg-gradient-to-b     z-0 rounded-xl p-2 '>
            {['About','Profile','Skills','Projects'].map((item)=>(
                <li
                key={item}
                className="relative px-4 rounded-lg transition duration-300 text-black md:text-black md:py-1 py-2 my-1 dark:text-white "
              >
                <NavLink
                  to={`#${item.toLowerCase()}`}
                  className={({ isActive }) => (isActive ? "active-link" : "inactive-link")+" hover:text-cyan-300 "}
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
            ))}</ul>
    </div>
    <div className="container mx-auto "><hr />
    <div className="f pt-3 text-center dark:text-white">© 2025 Dinesh Reddy. All Rights Reserved.
    </div>
    </div>
    </div>

    </section>

  )
}

export default Footer
