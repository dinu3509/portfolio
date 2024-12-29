import React from 'react'
import { hero } from '../assets'
import {useTypewriter,Cursor } from 'react-simple-typewriter'
import { ButtonOutline,ButtonPrimary } from './Button'
const Hero = () => {
    const [te] = useTypewriter({
        words:['Developer','ML Enthusiast','Programmer'],
        loop:true,
        typeSpeed: 100, 
    deleteSpeed: 50,
      });
  return (

    <div className='m-1 '>
        <div className="container mx-auto bg-[#000000] rounded-2xl overflow-hidden p-5 shadow-xl ">
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

                <div className="text-red flex flex-col  items-center lg:items-start text-white">
                    <div className="wel text-xs pb-1"> HELLO THERE. WELCOME TO MY SITE </div>
                   <div className="work flex  items-center gap-1">
                   <span className='relative flex w-2 h-2 bg-emerald-400 rounded-full'>
            <span className='absolute inset-0 rounded-full animate-ping bg-emerald-400'></span>        
            </span><span className='text-lg lg:text-2xl  font-semibold'>Available for Work</span>

            {/*  <span className='relative flex w-2 h-2 bg-emerald-400 rounded-full'>
            <span className='absolute inset-0 rounded-full animate-ping bg-emerald-400'></span>

            </span>*/}

                                          

                   </div>
                    <div className="name">
                    <span className='text-4xl md:text-6xl xl:text-8xl pb-3 font-bold'>Dinesh Reddy</span>

                    </div>
                    <div className="flex justify-center bg-transparent h-10 md:h-auto md:pb-2 lg:pb-3">
                    <span className='text-4xl font-bold text-red-900 md:text-6xl xl:text-8xl '> {te} </span> 
                    <span className='text-red-900 md:text-6xl xl:text-8xl '><Cursor/></span>
                    </div>
                    

                    <div className="tagline text-xl text-center lg:text-start lg:text-3xl font-semibold">Building Scalable Web Apps with MERN, Exploring the Future with ML.</div>
                    <div className="flex pt-4 gap-8">
                    <ButtonPrimary label="Download CV" icon="download" className={'border  p-2 flex items-center rounded-xl bg-red-900 hover:bg-red-500'}></ButtonPrimary>  

                    <ButtonOutline label={'Scroll Down'} icon={'arrow_downward'} to={'/about'} className={'border p-2 flex items-center rounded-xl bg-gray-700 hover:bg-gray-600'}></ButtonOutline>
                    </div>
                </div>


            </div>
            </div>




            <div className=" rounded-xl lg:flex justify-center hidden ">
                <figure className='max-w-[480px] relative'>
                    <img src={hero} alt="" width={676} height={800} className='rounded-full' />
                    <div className='absolute bg-gray-600 w-full h-4/6 top-1/3 -z-10 rounded-3xl'></div>

                </figure>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Hero
