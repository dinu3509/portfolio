import {React,useContext} from 'react'
import { ThemeContext } from './ThemeContext'
import  {Card}  from './Card'
const Education = () => {
  const {dm} = useContext(ThemeContext)
  return (
    <section id='profile'><div className={`${dm? "dark" : ""}  `}>
    <div className="container  mx-auto p-12 shadow-2xl rounded-2xl  mb-10 backdrop-blur-sm dark:bg-[#000000] ">
        
        
        <div className=" flex flex-col xl:flex-row justify-center xl:gap-40 items-center">
            
        <div className="flex flex-col text-white items-center">
        <h2 className='text-3xl md:text-6xl 2xl:text-7xl text-center font-bold text-black dark:text-white'>EDUC<span className='text-red-800'>AT</span>ION</h2>
            <Card clgName={`GITAM University`} year={`2022 - 2026`} course={`B.Tech in CSE`} grade={`9.49`} measure={`CGPA`}></Card>
            <Card clgName={`Ascent Jr. College`} year={`2020 - 2022`} course={`Intermediate MPC (BIEAP)`} grade={`96.1 %`} measure={`Grade`}></Card>
            <Card clgName={`DR. KKR Gowtham School`} year={`2019 - 2020`} course={<span>10<sup>th</sup> CBSE</span>} grade={`93.6 %`} measure={`Grade`}>
            
            </Card>
            
            
        </div>
        <div className="flex flex-col mt-5 text-white items-center">
        <h2 className='text-3xl md:text-6xl 2xl:text-7xl text-center font-bold text-black dark:text-white'>EXPER<span className='text-red-800'>I</span>E<span className='text-red-800'>N</span>CE</h2>
            <Card clgName={`ExceedIQ`} year={`Aug 2024 - Present`} course={`MERN Stack Trainee`} grade={`Not Yet Given`} measure={`Project:`}></Card>
            <Card clgName={`Rinex AI`} year={`Sept 2024 - Present`} course={`ML and DL Trainee`} grade={`Stock Price Prediction`} measure={`Project:`}></Card>
            <Card clgName={`Vibrance AI`} year={`June 2024 - Aug 2024`} course={`AI Trainee`} grade={`Plant Leaf Disease Detection`} measure={`Project:`}>
            
            </Card>
        </div>
        
        </div>
    </div>
  
</div></section>
    
  )
}

export default Education
