import {React,useContext,useState} from 'react'
import { hero } from '../assets'
import {useTypewriter,Cursor } from 'react-simple-typewriter'
import { ThemeContext } from './ThemeContext'
import CountUp from 'react-countup';
import { code } from '../assets';
import { ButtonOutline,ButtonPrimary,ReadButton } from './Button'
import ScrollTrigger from 'react-scroll-trigger';
import About from './About';

const Hero = () => {
    const [te] = useTypewriter({
        words:['Developer','ML Enthusiast','Programmer'],
        loop:true,
        typeSpeed: 100, 
    deleteSpeed: 50,
      });
       const [counterOn,setCounterOn]=useState(false)
          const {dm} =useContext(ThemeContext);
      
  return (
  <section id='hero'>
  <div className='z-0 mb-10'>

    <div className={`mt-1 ${dm ? "dark" : ""} `}>
        <div className={`container mx-auto  rounded-t-2xl overflow-hidden p-5 s dark:bg-black  backdrop-blur-sm z-0 shadow-2xl `}>
            
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 '>
            <div className="flex justify-center lg:justify-start lg:items-center p-7">
                <div className="flex flex-col">
                <div className='flex justify-center'>
                    <figure>
                    <img 
          src={hero} 
          alt="Hero" 
          width={200} 
          height={200} 
          className="w-[200px] h-[200px] object-contain rounded-full  lg:hidden" 
        />
                    </figure>
                </div>

                <div className="text-red flex flex-col  items-center lg:items-start text-black dark:text-white ">
                    <div className="wel text-xs pb-1 text-black dark:text-white "> HELLO THERE. WELCOME TO MY SITE </div>
                   <div className="work flex  items-center gap-1">
                   <span className='relative flex w-2 h-2 bg-emerald-400 rounded-full'>
            <span className='absolute inset-0 rounded-full animate-ping bg-emerald-400'></span>        
            </span><span className='text-lg lg:text-2xl  font-semibold'>Available for Work</span>

            {/*  <span className='relative flex w-2 h-2 bg-emerald-400 rounded-full'>
            <span className='absolute inset-0 rounded-full animate-ping bg-emerald-400'></span>

            </span>*/}

                                          

                   </div>
                    <div className="name">
                    <span className='text-4xl md:text-6xl 2xl:text-8xl pb-3 font-bold fh'>Dinesh Reddy</span>

                    </div>
                    <div className="flex justify-center bg-transparent h-10 md:h-auto md:pb-2 lg:pb-3">
                    <span className='fh text-3xl font-bold text-red-900 md:text-5xl xl:text-6xl '> {te} </span> 
                    <span className='text-3xl font-bold text-red-900 md:text-5xl xl:text-6xl '><Cursor/></span>
                    </div>
                    

                    <div className="tagline text-xl text-center lg:text-start lg:text-3xl font-semibold">Building Scalable Web Apps with MERN, Exploring the Future with ML.</div>
                    <div className="flex pt-4 gap-8">
                    <ButtonPrimary label="Download CV" icon="download" href={`Resume.pdf`} className={'border  p-2 flex items-center rounded-xl bg-red-900 hover:bg-red-500 text-white'}></ButtonPrimary>  

                    <ButtonOutline label={'Scroll Down'} icon={'arrow_downward'} to={'#about'} className={'border p-2 flex items-center rounded-xl bg-gray-700 hover:bg-gray-600 text-white'}></ButtonOutline>
                    </div>
                </div>


            </div>
            </div>




            <div className=" rounded-xl lg:flex justify-center hidden ">
                <figure className='max-w-[480px] relative'>
                    <img src={hero} alt="" width={480} height={800} className='rounded-full w-[480px] h-[480px]' />
                    <div className='absolute w-full h-4/6 top-1/3 -z-10 rounded-3xl'></div>

                </figure>
            </div>
        </div>
       
 <About></About>
        
        </div>


    </div>
    </div></section>
  )
}

export default Hero
