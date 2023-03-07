import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './style/subtotal.css'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

function Subtotal() {
  const [{basket},dispatch] =useStateValue()
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value)=>(
            <>
              <p>Subtotal ({basket.length} items) : <strong>{value}</strong></p> 
              <small className='subtotal__gift'>
                <input type="checkbox" />This order contain a gift
              </small> 
            </>
          )}
          decimalScale ={2}
          value = {getBasketTotal(basket)}
          displayType = {'text'}
          thousandSeparator = {true}
          prefix ={"$"}
      />
      <button>Proced to checkout</button>
    </div>
  )
}

export default Subtotal
