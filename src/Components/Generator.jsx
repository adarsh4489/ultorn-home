import React, { useState } from 'react'
import './Generator.css'
import design1 from '../assets/design1.png'

const Genrator = () => {
  // const[container,SetContainer]=useState(true)


  return (
    <div className="generator-container">
      <div>
        <h1 className="heading">
          Generate <span className="special-text">3D characters</span> from a
          text <br /> prompt or an image
        </h1>
      </div>
      <div className="buttons-container">
       <img src={design1}className='design-small' alt="" />
        <button className="btn" >Text-to-3D</button>
        <button className="btn">Image-to-3D</button>
      </div>
      {/* <div className="circle"></div>  for gradient effect in this section. */}
    </div>
  );
}

export default Genrator
