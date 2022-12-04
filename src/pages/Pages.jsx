import React from 'react'
import Home from '../componants/mainpage/Home'
import FlashDeals from '../componants/flashDeals/FlashDeals' 


const Pages = ({ value1, cartItem, addToCart }) => {
  return (
    <>
        <Home cartItem={cartItem}/>
        <FlashDeals value1={value1}/>
    </>
  )
}

export default Pages