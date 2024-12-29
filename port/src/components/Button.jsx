import {React,useState} from 'react'
import PropTypes from 'prop-types'
import {NavLink} from "react-router-dom"
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
    className
  }
)=>{
  const[stateMore,setStateMore]= useState(false)
  const toggleState = () =>{
    setStateMore(!stateMore)
  }
  return (
    <>
    <button className={className} onClick={toggleState}>
      {stateMore ? 'Read Less' : ' Read More'}
    {icon? <span className='material-symbols-rounded' aria-hidden="true">{icon}</span> :undefined}
    </button>
    {stateMore && <div className="extra-content">{extraContent}</div>}

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
    ReadButton
}