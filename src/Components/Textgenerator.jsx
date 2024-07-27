import React from 'react'
import './Textgenerator.css'
import male from '../assets/malesign.png'
import female from '../assets/female sign.png'

const Textgenerator = () => {
  return (
    <div className="wrapper-text-container">
      <div className="text-container">
        <div className="prompt-container">
          <textarea name="prompt" placeholder='Enter Your prompt for describing features' id="prompt" rows={12} cols={90}></textarea>
          <div className="gender">
            <h2>Choose Gender</h2>
            <div className="male category">
              <img className='gender-sign' src={male} alt="" />
              <p>Male</p>
            </div>
            <div className="female category">
              <img className='gender-sign' src={female} alt="" />
              <p>Female</p>
            </div>
          </div>
        </div>
        <div className="generate-btn">
            Generate
        </div>
        <div className="suggestions-container">
                <div className="suggestion">A 55 year old amarican guy with...</div>
                <div className="suggestion">A young smiling cute korean girl...</div>
                <div className="suggestion">45 year ol asian guy with clean...</div>
        </div>
      </div>
    </div>
    
  );
}

export default Textgenerator
