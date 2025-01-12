import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext } from './ThemeContext'
  


const Certificate = (
    {img,
    title,
    link}
) =>{
    return(
        <div className="md:h-[450px]  w-fit max-w-[150px] md:max-w-[450px] relative over rounded-2xl overflow-hidden ">
        <div>
          <img src={img} alt="Hover effect" className="md:w-[450px] md:h-[300px] z-0 h-[150px] w-[150px]" />
        </div>
    
        <div className=" md:h-[150px] bg-black py-2 md:py-0 flex flex-col justify-around items-center">
            <div className="text-sm md:text-2xl pb-2 md:pb-0"> {title}</div>
            <a href={link} className='gc border  rounded-full w-2/5 flex items-center justify-center' target='_blank'><span class="material-symbols-rounded md:text-4xl">
visibility
</span></a>
            
           
        </div>
      </div>
      
    )
}
Certificate.propTypes = {
    img:PropTypes.object,
    title:PropTypes.string,
    link:PropTypes.string,
   

}


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
            <div className="flex flex-col border min-h-[464px]  rounded-2xl p-3 shadow-xl justify-between">
                <div className="flex justify-center items-center">
                    <img src={img} alt="" className='h-[200px] w-full'/>
                </div>

                <div className="flex flex-col justify-center items-center bg-gray-400 rounded-b-2xl p-2 flex-1">
                    <h1 className='text-center font-semibold'>{title}</h1>
                    <h2>
                    {content}
                    </h2>

                    <a href={link} target='_blank' className='border w-2/5 p-1 rounded-2xl my-2 cursor-pointer shadow-lg text-lg font-semibold text-center hover:scale-105 gc1 transition-all duration-300'>
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
            <img src={img}  className='xl:h-28 xl:w-28 md:h-24 md:w-24 h-10 sm:h-20 '/>
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
    <div className='card group relative  rounded-t-3xl w-full bg- gap-1 m-1 flex flex-col items-center my-3 h-56 justify-center md:min-w-[544px] md:max-w-[544px] overflow-hidden min-w-[300px] '>
                    <h1 className='text-xl font-serif font-bold'>{clgName}</h1>
                    <h1 className='text-lg font-bold text-yellow-600'>{year}</h1>
                    <h1 className='text-xl  font-bold'>{course}</h1>
                    <div className="absolute rounded-t-2xl w-full h-full bg-transparent backdrop-blur-sm flex justify-center items-center translate-y-full group-hover:translate-y-1 transition-transform duration-300 p-2">
                        <div className="grade text-black font-bold">
                            <div className="flex flex-col justify-center items-center border p-4 rounded-xl shadow-xl">
                                <h2 className='text-white font-bold text-2xl'>{measure}</h2>
                                <h2 className='text-white font-bold text-2xl text-center bg-'>{grade}</h2>
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

export  {Card,ScrollItem,ProCard,Certificate}
