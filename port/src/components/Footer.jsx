import React, { useContext } from 'react'
import { insta,twitter,github,linkedin } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from './ThemeContext'



const Footer = () => {
    const {dm} = useContext(ThemeContext)
    const social = 
    [{name:"twitter",img:twitter,link:`https://x.com/monkeyDreddy05`},
        {name:"insta",img:insta,link:`https://www.instagram.com/dinesh03544/`},
        {name:'linkedin',img:linkedin,link:`https://www.linkedin.com/in/dinesh-reddy-dharmala-778429281/

`},
        {name:"github",img:github,link:`https://github.com/dinu3509`}];
  return (
    <section className={`${dm? "dark ": " "}`}>
    <div className={` py-6 mx-auto  backdrop-blur-sm ${dm? "aa": "shadow-lg"} rounded-t-2xl`}>
        <ul className='flex gap-4 justify-center h-28   '>
        {social.map((item)=>(
        
        <li key={item.name} className='flex justify-center items-center list-none h-full relative mx-10'>
           
                <div className=" h-full absolute top-1/4 w-12   hover:scale-105 transition-all duration-300 ease-in-out">
                <a href={item.link} target='_blank'>
                <div className="ic bg-transparent border p-2 rounded-full shadow-xl dark:bg-white">
                    
                    <img src={item.img} width={35} className='' />
                    </div>
                </a>
                
                </div>
            
           
            
        </li>
      ))}
        </ul>
      
    </div>
    </section>

  )
}

export default Footer
