import React from 'react'
import './Card.css'
export default function Card({title,categorie,price,img,desc}) {
  return (
    <div className="card">
        <div className="left">
            <img src={img} alt='food' className='image'/>
        </div>
        <div className="right">
            <div className="title">{title} <span className='price'> $ {price}</span></div>
            <div className="line"></div>
            <div className="details">{desc}</div>
        </div>
        
       
    </div>
  )
}
