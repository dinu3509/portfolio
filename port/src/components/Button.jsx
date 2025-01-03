import {React,useState,useContext} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom"
import { Typewriter } from 'react-simple-typewriter'
import { day,night } from '../assets'
import { ThemeContext } from './ThemeContext'

const DarkMode =() => {
  const { dm, toggleMode } = useContext(ThemeContext);
      const changeMode =() =>{
        toggleMode(!dm)
      }

  return (
    <button onClick={changeMode} className=' rounded-full  backdrop-blur-lg shadow-2xl right-3 fixed bottom-5 md:bottom-20 md:right-20 z-50'>
      <img  src= {`${dm? day : night}`} className='md:w-10 w-8' />
    </button>
    
  )
}



const ButtonPrimary = (
    {to,
    label,
    icon,
    className

    }

) => {
    if(to){
        return(
            <NavLink to={to}  className={"btn btn-primary "+className}>{label}
            {icon? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> :undefined}
            
            </NavLink>
        )
    }else{
        return (
          <div>
            <button className={'btn btn-primary '+className}>
            {label}
            {icon ? <span className='material-symbols-rounded ' aria-hidden="true">{icon}</span> :undefined}
            </button>
          </div>
        )
      }

 /* return (
    <div>
        <button>

        </button>
      
    </div>
  )*/
}
ButtonPrimary.PropTypes= {
    label:PropTypes.string.isRequired,
    to:PropTypes.string,
    className:PropTypes.string,
}

const ButtonOutline = ({
    to,
    label,
    icon,
    className
}) => {
    if(to){
        return(
            <NavLink to={to}
            className={"btn btn-outline "+className}
            >{label}
            {icon ? <span className='material-symbols-rounded animate-bounce' aria-hidden="true">{icon}</span> :undefined}</NavLink>
        )
    }else{
  return (
    <div>
      <button className={'btn btn-outline '+className}>
      {label}
      {icon ? <span className='material-symbols-rounded ' aria-hidden="true">{icon}</span> :undefined}
      </button>
    </div>
  )
}}
ButtonOutline.PropTypes= {
    label:PropTypes.string.isRequired,
    to:PropTypes.string,
    className:PropTypes.string,
}

const ReadButton =(
  {
    label,
    icon,
    className,extraContent
  }
)=>{
  const[stateMore,setStateMore]= useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const toggleState = () =>{
    setStateMore(!stateMore)
    setShowCursor(true);
  }
  return (
    <>
        {stateMore && <div className="extra-content"><Typewriter
            words={[extraContent]} 
            loop={1}
            cursor ={showCursor}
            cursorStyle="|"
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={1000}
            onType = {()=> setShowCursor(false)}
          /></div>}
    <button className={className} onClick={toggleState}>
      {stateMore ? 'Read Less' : ' Read More'}
    {icon? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> :undefined}
    </button>

    </>
  )
}
ReadButton.PropTypes = {
  label:PropTypes.string,
  className:PropTypes.string,
  extraContent: PropTypes.string.isRequired

}

export {
    ButtonOutline,
    ButtonPrimary,
    ReadButton,
    DarkMode
}