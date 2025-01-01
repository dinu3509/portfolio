import {React,useState} from 'react'
import PropTypes from 'prop-types'
import ScrollTrigger from 'react-scroll-trigger'
const Bar = (
  {percentage}

) => {
  const [counterOn,setCounterOn]=useState(false)
  return (
    <div className=''>
        <div className="skill flex justify-center">
            <div className="outer h-40 w-40  flex items-center justify-center rounded-full shadow-2xl">
                <div className="inner h-32 w-32 shadow-inner  rounded-full flex justify-center items-center relative" >
                  <ScrollTrigger>

                  </ScrollTrigger>
                  <div className="" id='#num'>{percentage}
                    
                  </div>
                  
                </div></div>
                <div className="absolute">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <div className="
                  ">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stop-color="#e91e63" />
               <stop offset="100%" stop-color="#673ab7" />
            </linearGradient>
         </defs>
         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
                </div>}
                
                </ScrollTrigger></div>

        </div>
   
    </div>
  )
}
Bar.PropTypes={
  percentage:PropTypes.string
}

export default Bar
