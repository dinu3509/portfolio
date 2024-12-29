import React from 'react'
import PropTypes from 'prop-types'
const Card = (
    {clgName,
        year,
        course
    }
) => {
  return (
    <div className='card rounded-3xl w-full bg- gap-1 m-1 flex flex-col items-center my-3 h-56 justify-center'>
                    <h1 className='text-xl font-serif font-bold'>{clgName}</h1>
                    <h1 className='text-lg font-bold text-yellow-600'>{year}</h1>
                    <h1 className='text-xl  font-bold'>{course}</h1>
                </div>
  )
}
Card.PropTypes ={
    clgName:PropTypes.string.isRequired,
    year:PropTypes.string.isRequired,
    course:PropTypes.string.isRequired
}

export default Card
