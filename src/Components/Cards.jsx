import React from 'react'
import './Cards.css'
import boyImage from '../assets/character boy.png'
import girlImage from '../assets/character girl.png'
import newBoy from '../assets/boy2.png'
import dots from '../assets/three dots.png'

const Cards = (props) => {


  

     const mydata=[
        {
            id:1,
            url:boyImage,
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:2,
            url:girlImage,
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:3,
            url:newBoy,
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:4,
            url:girlImage,
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:5,
            url:boyImage,
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:6,
            url:newBoy,
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:7,
            url:boyImage,
            description:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nihil aut fugiat quasi quos.",
        },
        {
            id:8,
            url:girlImage,
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
                   <div key={item.id}  className='my-card-wrapper'  style={{ backgroundImage: `url(${item.url})` }} >
     <img src={dots} alt="" />
      {item.id % 2 === 0 && <div className="description">{item.description}</div>}

      
    </div>
                )
            })
        }
     
      </div>
    </div>
  )
}

export default Cards
