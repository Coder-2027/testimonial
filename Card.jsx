import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Card = (props) => {
    let review = props.reviews;
    let leftHandler = props.leftHandler;
    let rightHandler = props.rightHandler;
    let surpriseHandler = props.surpriseHandler;
  return (
    <div className="card">
        <div className="image">
            <img src={review.image} alt="" />
            <div className="img-background"></div>
        </div>

        <div className="name">{review.name}</div>
        <div className="profile">{review.job}</div>

        <div className="info">
            <FaQuoteLeft/>
            
            <p className="para">{review.text}</p>
            
            <FaQuoteRight/>
        </div>


        <div className="arrows">
            <button onClick={() => {leftHandler()}}><IoIosArrowBack/></button>
            <button onClick={() => {rightHandler()}}><IoIosArrowForward/></button>
        </div>

        <button className="btn" onClick={() => {surpriseHandler()}}>Surprise Me</button>
    </div>
  )
}

export default Card