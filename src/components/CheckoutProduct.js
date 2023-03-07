import React from 'react'
import './style/chckoutproduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({image,price,title,id,rating}) {
  const [{basket},dispatch] = useStateValue()

  const removeFromBasket =()=>{
    dispatch({
        type:"REMOVE_FROM_BASKET",
        id:id
    })
  }

  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct__img' src={image} />
        <div className='checkoutproduct_info'>
            <div className='checkoutproduct__title'>
                <p>{title}</p>
                <div className='checkoutproduct__price' >
                    <p>$</p>
                    <strong>{price}</strong>
                </div>
                <div className='checkoutproduct__rating'>
                    <p>{rating}</p> 
                </div>
                <button className="checkoutproduct__btn" onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>

      
    </div>
  )
}

export default CheckoutProduct
