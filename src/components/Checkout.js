import React from 'react'
import Subtotal from './Subtotal'
import './style/checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'

function Checkout() {
  const [{basket},dispatch] = useStateValue()
  return (
    <div className='checkout'>
     <div className='chckout__left'>
        <img 
          className='checkout__ad'
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg'
        />
        <div className='checkout_title'>
            <h2>Your Shopping Basket</h2>
        </div>
        
        <div className='checkout__procuctlist'>
        {basket.map(item=>(
             <CheckoutProduct
                id={item.id}
                price = {item.price}
                title= {item.title}
                rating = {item.rating}
                image= {item.image} />
          ))}
        </div>
           
          

     </div> 
     <div className='checkout__right'>
        <Subtotal />
     </div>

    </div>
  )
}

export default Checkout
