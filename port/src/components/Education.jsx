import React from 'react'
import { card } from '../assets'
const Education = () => {
  return (
    <div>
        <div className="container mt-10 mx-auto p-12 shadow-2xl rounded-2xl  mb-20 backdrop-blur-sm bg-[#021526]">
            <div className="edu ">
                <h2 className='text-6xl text-center font-bold text-white'>EDUC<span className='text-red-800'>AT</span>ION</h2>
            </div>
            <div className="grid grid-cols-1 mt-5 text-white">
                <div className='card  card rounded-3xl w-full bg- gap-1 m-1 flex flex-col items-center my-3'>
                    <h1 className='text-xl font-serif font-bold'>GITAM University</h1>
                    <h1 className='text-lg font-bold text-yellow-600'>2022 - 2026</h1>
                    <h1 className='text-xl  font-bold'>B.Tech in CSE</h1>
                </div>
                <div className='card card rounded-3xl w-full bg-white gap-1 m-1 flex flex-col items-center my-3'>
                <h1 className='text-xl font-serif font-bold'>Ascent Jr. College </h1>
                    <h1 className='text-lg font-bold text-yellow-600'>2020 - 2022</h1>
                    <h1 className='text-xl  font-bold'>Intermediate MPC(APBIE)</h1>
                </div>
                <div className='card rounded-3xl w-full bg-white gap-1 m-1 flex flex-col items-center my-3'>
                <h1 className=' text-3xl font-serif font-bold'>Dr. KKR Gowtham School</h1>
                    <h1 className='text-lg font-bold text-yellow-600'>2019 - 2020</h1>
                    <h1 className='text-2xl font-serif font-bold'>10<sup>th</sup> CBSE</h1>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Education
