import React from 'react'
import Bar from './Bar'
import { Marq } from './Card'
import {ejs,mongo,panda,tail,tf,html,react,ocv,js,git} from '../assets'
const Skill = () => {
  return (
    <div className='container bg-black mx-auto min-h-screen p-12'>
     <div className="md:text-6xl font-bold lg:text-6xl text-center text-white">SK<span className='text-red-900'>I</span>LL<span className='text-red-900'>S</span></div>

     <div className="text-white text-4xl text-center font-bold mt-7">FRONTEND</div>
      <marquee className=" rounded-xl border-y bg-red" scrollamount="13">
        <div className="flex gap-20 rounded-xl">
        
        <Marq label={`TailwindCSS`} img={tail} link={`https://tailwindcss.com/`}></Marq>
        <Marq label={`HTML5`} img={html} link={`https://html.spec.whatwg.org/`}></Marq>
        <Marq label={`Javascript`} img={js} link={`https://www.javascript.com/`}></Marq>
        <Marq label={`React`} img={react} link={`https://react.dev/`}></Marq>
        <Marq label={`Express JS`} img={ejs} link={
          "https://expressjs.com/"}></Marq>
        <Marq label={`Mongo DB`} img={mongo} link={"https://www.mongodb.com/"}></Marq>
        <Marq label={`Pandas`} img={panda} link={`https://pandas.pydata.org/`}></Marq>
        <Marq label={`Tensorflow`} img={tf} link={`https://pandas.pydata.org/`}></Marq>
        <Marq label={`OpenCV`} img={ocv} link={`https://pandas.pydata.org/`}></Marq>
        <Marq label={`Git`} img={git} link={`https://pandas.pydata.org/`}></Marq>

        </div>

</marquee>
    {/*<Marq label={`Express JS`} img={ejs} link={
          "https://expressjs.com/"}></Marq>
        <Marq label={`Mongo DB`} img={mongo} link={"https://www.mongodb.com/"}></Marq>
        <Marq label={`Pandas`} img={panda} link={`https://pandas.pydata.org/`}></Marq>*/}
    </div>

  )
}

export default Skill
