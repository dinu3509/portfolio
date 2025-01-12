import React, { useContext } from 'react'
import { ScrollItem,Certificate } from './Card'
import { ThemeContext } from './ThemeContext'
import { html,tail,js,react,ejs,mongo,panda,ocv,tf,git,c,java,py,web,ml } from '../assets'
import Projects from './Projects'
const Skill = () => {
  const {dm} =useContext(ThemeContext);
  return (
    <section id='skills'>
      <div className={`${dm ? "dark": ""}`}>
    <div className='dark:bg-black container p-12 mx-auto h-auto  backdrop-blur-sm rounded-2xl shadow-2xl xl:min-h-screen mb-10'>
     
        <h2 className="text-black dark:text-white text-center text-3xl md:text-6xl 2xl:text-7xl font-bold mb-10">
          SK<span className='text-red-900'>I</span>LL< span className='text-red-900'>S</span>
        </h2>
      
   
       <h1 className='text-black dark:text-white  text-3xl md:text-4xl text-center font-bold mb-4 '>TOOLS AND LIBRARIES</h1>
      <div className="grid grid-cols-3 lg:grid-cols-5 lg:gap-y-10 ">
        <ScrollItem img={html} cl={`item item1`} label={`HTML`}></ScrollItem>
<ScrollItem img={tail} cl={`item item2`} label={`Tailwind`}></ScrollItem>
<ScrollItem img={js} cl={`item item3`} label={`JavaScript`}></ScrollItem>
<ScrollItem img={react} cl={`item item4`} label={`React`}></ScrollItem>
<ScrollItem img={ejs} cl={`item item5`} label={`ExpressJS`}></ScrollItem>
<ScrollItem img={mongo} cl={`item item6`} label={`MongoDB`}></ScrollItem>
<ScrollItem img={panda} cl={`item item7`} label={`Pandas`}></ScrollItem>
<ScrollItem img={ocv} cl={`item item8`} label={`OpenCV`}></ScrollItem>
<ScrollItem img={tf} cl={`item item9`} label={`Tensorflow`}></ScrollItem>
<ScrollItem img={git} cl={`item item10`} label={`Git`}></ScrollItem>


      </div>
      <h1 className=' text-black dark:text-white text-center text-3xl md:text-4xl font-bold mb-4  mt-10'><span className='hidden lg:inline'>PROGRAMMING</span> LANGUAGES</h1>
      <div className="grid grid-cols-3 lg:grid-cols-5">
      <ScrollItem img={c} cl={`item item1`} label={`C`}></ScrollItem>
<ScrollItem img={py} cl={`item item2`} label={`Python`}></ScrollItem>
<ScrollItem img={java} cl={`item item3`} label={`Java`}></ScrollItem>

      </div>
      <div className="text-center text-3xl md:text-4xl font-bold mt-10  text-black dark:text-white">
        <div className="mb-4">
        CERTIFICATIONS
        </div>

        <div className="">
               <div className="flex gap-5 justify-around text-white">
      <Certificate img={web} link={`http://ude.my/UC-8251bd14-842f-43c8-9782-e74710f9e966`} title={`WEB DEVELOPER 3.0`}></Certificate>
      <Certificate img={ml} link={`https://www.coursera.org/account/accomplishments/specialization/certificate/BRVTFPXQW5Y8`} title={`ML SPECIALIZATION`}></Certificate>

      </div>
        </div>
      </div>
          
    </div>
    <Projects></Projects>
    </div>
    </section>


  )
}

export default Skill
