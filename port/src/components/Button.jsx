import React from 'react'
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

export {
    ButtonOutline,
    ButtonPrimary
}