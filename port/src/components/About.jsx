import {React,useState} from 'react'
import CountUp from 'react-countup';
import { code } from '../assets';
import ScrollTrigger from 'react-scroll-trigger';
const About = () => {
    const [counterOn,setCounterOn]=useState(false)

  return (
    <div className='m-1 mt-10'>
        <div className="container rounded-2xl mx-auto bg-[#000000] p-12">
            
            <div className="md:grid md:grid-cols-2 ">

                <div className="about-me  flex flex-col justify-center items-center lg:items-start mr-6 text-4xl">
                    <h2 className='text-white md:text-6xl xl:text-8xl font-bold'>ABOUT</h2>
                    <h2 className='text-red-900 md:text-6xl xl:text-8xl font-bold '>ME</h2>
                    <img src={code} alt="" className='w-80 h-80 hidden lg:block rounded-full xl:w-11/12 xl:rounded-3xl'/>


                </div>
                <div className="text-lg text-start text-white font-semibold lg:text-xl md:text-center flex items-center lg:items-start lg:text-start">

            I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) at GITAM University. My academic journey is fueled by a deep interest in web development and machine learning, where I aim to blend creativity with cutting-edge technology to solve real-world problems. With a strong foundation in programming and a passion for innovation, I am constantly exploring new tools and techniques to enhance my skills and contribute meaningfully to the tech community.


            </div>
            <div className="col-span-2 text-white w-full mt-5 lg:mt-12
            text-sm font-bold  p-2 rounded-2xl backdrop:blur-2xl bg-gradient-to-r from-red-600/5 to-red-600/5 xl:text-3xl">
                
                <div className="grid grid-cols-2">
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

export default About
