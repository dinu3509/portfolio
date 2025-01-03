import React, { useContext } from 'react'
import { ScrollItem } from './Card'
import { ThemeContext } from './ThemeContext'
import { html,tail,js,react,ejs,mongo,panda,ocv,tf,git,c,java,py } from '../assets'
import Projects from './Projects'
const Skill = () => {
  const {dm} =useContext(ThemeContext);
  return (
<div className={`${dm ? "dark": ""}`}>
    <div className='dark:bg-black container p-12 mx-auto h-auto  backdrop-blur-sm rounded-2xl shadow-2xl'>
     
        <h2 className="text-black dark:text-white text-center text-6xl font-bold mb-10">
          SK<span className='text-red-900'>I</span>LL< span className='text-red-900'>S</span>
        </h2>
      
   
       <h1 className='text-black dark:text-white text-center text-4xl font-bold mb-4 '>TOOLS AND LIBRARIES</h1>
      <div className="scrollContainer relative overflow-hidden border-y xl:h-48 lg:h-36 flex justify-center items-center h-32">
        <div className="carouselPrimary flex ">
        <ScrollItem img={html} cl={`item item1`} label={`HTML`}></ScrollItem>
<ScrollItem img={tail} cl={`item item2`} label={`Tailwind`}></ScrollItem>
<ScrollItem img={js} cl={`item item3`} label={`JavaScript`}></ScrollItem>
<ScrollItem img={react} cl={`item item4`} label={`React`}></ScrollItem>
<ScrollItem img={ejs} cl={`item item5`} label={`ExpressJS`}></ScrollItem>

        </div>
        <div className="carouselPrimary carouselSecondary">
      
        <ScrollItem img={mongo} cl={`item item6`} label={`MongoDB`}></ScrollItem>
<ScrollItem img={panda} cl={`item item7`} label={`Pandas`}></ScrollItem>
<ScrollItem img={ocv} cl={`item item8`} label={`OpenCV`}></ScrollItem>
<ScrollItem img={tf} cl={`item item9`} label={`Tensorflow`}></ScrollItem>
<ScrollItem img={git} cl={`item item10`} label={`Git`}></ScrollItem>

        </div>

      </div>
      <h1 className=' text-black dark:text-white text-center text-4xl font-bold mb-4  mt-10'><span className='hidden lg:block'>PROGRAMMING</span> LANGUAGES</h1>
      <div className="overflow-hidden xl:h-48 lg:h-36 border-y flex justify-center items-center h-32 md:gap-24 scrollContainer">
      <ScrollItem img={c} cl={`item item1`} label={`C`}></ScrollItem>
<ScrollItem img={py} cl={`item item2`} label={`Python`}></ScrollItem>
<ScrollItem img={java} cl={`item item3`} label={`Java`}></ScrollItem>

      </div>



          
    </div>
    <Projects></Projects>
    </div>

  )
}

export default Skill
