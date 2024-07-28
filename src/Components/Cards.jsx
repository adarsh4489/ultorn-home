import React from 'react'
import './Cards.css'
import Mycard from './Mycard'

const Cards = (props) => {

     const mydata=[
        {
            id:1,
            url:"",
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:2,
            url:"",
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:3,
            url:"",
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:4,
            url:"",
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:5,
            url:"",
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:6,
            url:"",
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
    ];

  return (
    <div className='cards-wrapper'>
      <div className="card-selection-btn">
        <button className='featured-btn'>My Avatar</button>
        <button className='featured-btn'>Featured</button>
      </div>
      <div className="cards-container">
        {
           mydata.map((item)=>{
                return(
                    <Mycard></Mycard>
                )
            })
        }
     
      </div>
    </div>
  )
}

export default Cards
