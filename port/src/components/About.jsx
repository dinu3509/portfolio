/*import {React,useState,useContext} from 'react'
import CountUp from 'react-countup';
import { code } from '../assets';
import { ButtonOutline,ButtonPrimary,ReadButton } from './Button'
import ScrollTrigger from 'react-scroll-trigger';
import { ThemeContext } from './ThemeContext'

const About = () => {
    const [counterOn,setCounterOn]=useState(false)
    const {dm} =useContext(ThemeContext);

  return (
    <div className={`${dm ? "dark" : ""}`}>
        <div className="container rounded-b-2xl mx-auto dark:bg-[#000000] p-12">
            
            <div className="md:grid md:grid-cols-2 ">

                <div className="flex flex-col justify-center items-center  mr-6 text-4xl">
                    
                    <img src={code} alt="" className='w-80 h-80 hidden md:block rounded-full  xl:rounded-full'/>


                </div>
                <div className="text-white 
                md:text-lg font-semibold">
                    <div className="flex gap-2 text-xl md:flex-col justify-center md:justify-start">
                    <h2 className='text-black dark:text-white md:text-6xl 2xl:text-7xl font-bold'>ABOUT</h2>
                    <h2 className='text-red-900 md:text-6xl 2xl:text-7xl font-bold '>ME</h2>
                    </div>
                
<div className="text-black dark:text-white">
            I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) at GITAM University. My academic journey is fueled by a deep interest in web development and machine learning, where I aim to blend creativity with cutting-edge technology to solve real-world problems. With a strong foundation in programming and a passion for innovation, I am constantly exploring new tools and techniques to enhance my skills and contribute meaningfully to the tech community.</div>
            <ReadButton className={`bg-red-950
                p-1 border border-white rounded-xl mt-2 flex gap-2 items-center justify-center`} icon={`read_more`}extraContent={`Beyond academics, I have a keen interest in Olympic weightlifting, regional politics, and cricket, which reflect my dedication to personal growth, understanding societal dynamics, and fostering teamwork and discipline. Together, these pursuits shape a well-rounded individual eager to innovate and make a difference.`}></ReadButton>

            </div>
            <div className="col-span-2 text-black dark:text-white w-full mt-5 lg:mt-12
            text-sm font-bold  p-2 rounded-2xl backdrop:blur-2xl bg-gradient-to-r from-red-600/5 to-red-600/5 xl:text-2xl">
                
                <div className="grid grid-cols-2 ">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="c1 flex flex-col items-center justify-center">
                    {counterOn && <CountUp start={0} end={2} duration={1} delay={0}/>}
                
                
                <h2 className='flex gap-2 justify-center items-center'>
                <span class="material-symbols-rounded">work_history</span>Projects Completed
                
                </h2>
                

                </div>
                </ScrollTrigger>

                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className="c2 flex flex-col items-center justify-center ">
                    <span className='flex justify-center items-center gap-2 '>
                    {counterOn && <CountUp start={0} end={5} duration={2} delay={0}/>}
<span> Months+</span>
                    </span>
                
                
                <h2 className='flex gap-2 justify-center items-center'>
                <span class="material-symbols-rounded">more_time</span>
                Experience
                
                </h2>
                </div>
                </ScrollTrigger>
                
                </div>
                
               
            </div>
            
            </div>
        </div>
        
      
    </div>
  )
}

export default About*/
