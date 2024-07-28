import React, { useState } from 'react'
import './Generator.css'


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
        <button className="btn" >Text-to-3D</button>
        <button className="btn">Image-to-3D</button>
      </div>
    </div>
  );
}

export default Genrator
