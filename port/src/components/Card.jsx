import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ejs } from '../assets'
import { ThemeContext } from './ThemeContext'
  
const ProCard = (
    {
        img,
        title,
        link,
        content

    }
) =>{
    return(
        <div className="w-80  mx-5 shrink-0">
            <div className="flex flex-col border   rounded-2xl p-3 shadow-xl justify-between">
                <div className="flex justify-center items-center">
                    <img src={img} alt="" className='h-[200px] w-full'/>
                </div>

                <div className="flex flex-col justify-center items-center bg-gray-400 rounded-2xl p-2">
                    <h1 className='text-center font-semibold'>{title}</h1>
                    <h2>
                    {content}
                    </h2>

                    <a href={link} target='_blank' className='border p-1 rounded-2xl my-2 cursor-pointer shadow-lg text-lg font-semibold'>
                        View
                    </a>
                    
                </div>
            </div>
        </div>
    )
}
ProCard.propTypes = {
    img:PropTypes.object,
    title:PropTypes.string,
    link:PropTypes.string,
    content:PropTypes.string

}

const ScrollItem = (
    {img,
      cl,
      label
        
    }
) =>{
    const {dm} = useContext(ThemeContext)

    return(
        <div className={`flex flex-col dark:text-white  items-center m-2 shrink-0  ${dm?"dark ":" "}`+cl}>
            <img src={img}  className='xl:h-32 xl:w-32 md:h-24 md:w-24 h-10 sm:h-20 '/>
            <h2 className=' md:text-lg'>{label}</h2>
        </div>
    )

}
ScrollItem.PropTypes = {
    img:PropTypes.object,
    cl:PropTypes.string,
    label:PropTypes.string
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

export  {Card,ScrollItem,ProCard}
