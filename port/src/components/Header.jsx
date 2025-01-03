import {React,useContext} from 'react'
import Navbar from './Navbar'
import { logo } from '../assets'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from './ThemeContext'
const Header = () => {
  const {dm} = useContext(ThemeContext)
  return (
    <>
    <header className={` flex w-full justify-between z-20 h-20 items-center  px-8 my-5 ${dm?"dark" : ""}`}>
        <div className="flex justify-between w-full max-w-screen-2xl mx-auto items-center">

            {/*Logo*/}
        <div className="logo border-zinc-100 border rounded-full shadow-xl">
        <NavLink to="/">
          <img src={logo} alt="Logo" width={60} className="rounded-full" />
        </NavLink>
        </div>

            {/*Navbar*/}
        <div className="nav text-white">
            
        <Navbar></Navbar>
        </div>

            {/*Contact-Button*/}
        <div className="contact hidden md:flex items-center">
            <button className={`p-3 rounded-xl shadow-lg flex items-center active:scale-105 duration-150 bg-white`}>
                Contact Me
            </button>
        </div>
        </div>
    </header>
    </>
  )
}

export default Header
