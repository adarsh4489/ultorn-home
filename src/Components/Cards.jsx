import React from 'react'
import './Cards.css'
import Mycard from './Mycard'

const Cards = () => {

  const data=[
  {
    background: "",
    description: " ipsum dolor sit amet consectetur adipisicing elit. Nisi, at aut neque officia aspernatur ipsum provident obcaecati cupiditate nulla illo nobis laborum voluptatibus, sit soluta."
  },
  {
    background: "",
    description: " ipsum dolor sit amet consectetur adipisicing elit. Nisi, at aut neque officia aspernatur ipsum provident obcaecati cupiditate nulla illo nobis laborum voluptatibus, sit soluta."
  },
  {
    background: "",
    description: " ipsum dolor sit amet consectetur adipisicing elit. Nisi, at aut neque officia aspernatur ipsum provident obcaecati cupiditate nulla illo nobis laborum voluptatibus, sit soluta."
  },
  {
    background: "",
    description: " ipsum dolor sit amet consectetur adipisicing elit. Nisi, at aut neque officia aspernatur ipsum provident obcaecati cupiditate nulla illo nobis laborum voluptatibus, sit soluta."
  },
  {
    background: "",
    description: " ipsum dolor sit amet consectetur adipisicing elit. Nisi, at aut neque officia aspernatur ipsum provident obcaecati cupiditate nulla illo nobis laborum voluptatibus, sit soluta."
  },
  {
    background: "",
    description: " ipsum dolor sit amet consectetur adipisicing elit. Nisi, at aut neque officia aspernatur ipsum provident obcaecati cupiditate nulla illo nobis laborum voluptatibus, sit soluta."
  },
  
  {}
]

  return (
    <div className='cards-wrapper'>
      <div className="card-selection-btn">
        <button className='featured-btn'>My Avatar</button>
        <button className='featured-btn'>Featured</button>
      </div>
      <div className="cards-container">
      
      </div>
    </div>
  )
}

export default Cards
