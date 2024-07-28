import React from 'react'
import dots from '../assets/three dots.png'
import './Mycard.css'

const Mycard = (props) => {

  return (
    <div className='my-card-wrapper' >
     <img src={dots} alt="" />
      <div className="decription">{props.description}</div>
      
    </div>
  )
}

export default Mycard
