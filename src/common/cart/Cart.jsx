import React from 'react'

const Cart = ({cartItem, addToCart}) => {
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
            <div className="cart-details">
                {cartItem.length === 0 && <h1 className="no-items product">No Items are add in Cart</h1>}
                
            </div> 
        </div>
      </section>
    </>
  )
}

export default Cart