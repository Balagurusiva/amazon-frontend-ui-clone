import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

function Payment() {

  const [{basket,user}, dispatch] = useStateValue() 
  return (
    <div className='payment'>
        <div className='payment__container'>
             <div className='payment__section'>

                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>

                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>45/A,Road street, vasur</p>
                    <p>Tiruvanamalai</p>
                </div>
             </div>

             <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>

                <div className='payment__item'>
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
        </div>
      
    </div>
  )
}

export default Payment
