import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import Data from './Data';


const NextArrow =(props) =>{
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-long-arrow-alt-right"></i>
            </button>
        </div>
    )
}
    const PrevArrow =(props) =>{
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-long-arrow-alt-left"></i>
            </button>
        </div>
    )
}
const FlashCard = ({value1 , addToCart}) => {
  const [count, setCount] = useState(0)
  const increment = () =>{
    setCount(count + 1 )
  }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }
  return (
    <>
    <Slider {...settings}>
    {Data.map((value1, index) => {
        return (
         <div className="box" key={index}>
        <div className="product mtop">
            <div className="img">
                <span className="discount">{value1.discount}% off</span>
                <img src={value1.cover} alt="" />
                <div className="product-like">
                    <label>0</label> <br />
                    <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
            </div>
            <div className="product-details">
                <h3>{value1.name}</h3>
                <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                </div>
                <div className="price">
                    <h4>{value1.price}<i class="fa fa-inr" aria-hidden="true"></i></h4>
                    <button onClick={() => addToCart(value1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    </div> )})}
    </Slider>
    </>
  )
}

export default FlashCard