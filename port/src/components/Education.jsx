import React from 'react'
import  Card  from './Card'
const Education = () => {
  return (
    <div>
        <div className="container mt-10 mx-auto p-12 shadow-2xl rounded-2xl  mb-20 backdrop-blur-sm bg-[#000000]">
            <div className="edu ">
                <h2 className='text-6xl text-center font-bold text-white'>EDUC<span className='text-red-800'>AT</span>ION</h2>
            </div>
            <div className="grid grid-cols-1 mt-5 text-white">
                <Card clgName={`GITAM University`} year={`2022 - 2026`} course={`B.Tech in CSE`}></Card>
                <Card clgName={`GITAM University`} year={`2020 - 2022`} course={`Intermediate MPC (BIEAP)`}></Card>
                <Card clgName={`GITAM University`} year={`2019 - 2020`} course={<span>10<sup>th</sup> CBSE</span>}></Card>
                
                
            </div>
        </div>
      
    </div>
  )
}

export default Education
