import React from 'react'
import PropTypes from 'prop-types'
import { ejs } from '../assets'
const Marq = (
    {label,
        img,
        link

    }
) =>{
    return (
        <div className="flex flex-col justify-between items-center py-2">
            <a href={link} target='blank'>
            <img src={img} alt="" className='w-15'/>
            </a>
            
            <div className="">
            <h2 className='text-xl text-white flex '>{label}
                
            </h2>
        </div>
        </div>
    )
}
Marq.PropTypes = {
    label:PropTypes.string,
    img:PropTypes.object,
    link:PropTypes.string
}

const Card = (
    {clgName,
        year,
        course,
        grade,
        measure
    }
) => {
  return (
    <div className='card group relative  rounded-t-3xl w-full bg- gap-1 m-1 flex flex-col items-center my-3 h-56 justify-center md:min-w-[544px] md:max-w-[544px] overflow-hidden min-w-[300px]'>
                    <h1 className='text-xl font-serif font-bold'>{clgName}</h1>
                    <h1 className='text-lg font-bold text-yellow-600'>{year}</h1>
                    <h1 className='text-xl  font-bold'>{course}</h1>
                    <div className="absolute rounded-t-2xl w-full h-full bg-transparent backdrop-blur-sm flex justify-center items-center translate-y-full group-hover:translate-y-1 transition-transform duration-300 ">
                        <div className="grade text-black font-bold">
                            <div className="flex flex-col justify-center items-center border p-4 rounded-xl shadow-xl">
                                <h2 className='text-white font-bold text-2xl'>{measure}</h2>
                                <h2 className='text-white font-bold text-2xl'>{grade}</h2>
                                </div>
                            <div className="">
                                
                            </div>
                            </div>

                    </div>
                </div>
  )
}
Card.PropTypes ={
    clgName:PropTypes.string.isRequired,
    year:PropTypes.string.isRequired,
    course:PropTypes.string.isRequired,
    grade:PropTypes.string,
    measure:PropTypes.string
}

export  {Card,Marq}
