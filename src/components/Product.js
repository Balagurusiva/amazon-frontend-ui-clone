import React from 'react'
import './style/product.css'
import { useStateValue } from './StateProvider';

function Product({id,title,image,price,rating}) {
   const [state,dispatch] = useStateValue();

   const addToBasket =()=>{
     dispatch({
       type:'ADD_TO_BASKET',
       item:{
         id:id,
         title:title,
         image:image,
         price:price,
         rating:rating,
       },
     })
   }
  return (
    <div className='product'>
      <div className='product__info'>
         <p className='product__title'>{title}</p>
        
         <p className='product__price'>
            <small>$</small>
            <p>{price}</p>
         </p>
         <div className='product__rating'>  
            <p>{rating}</p> 
         </div>
       </div> 
        <img  
           className='product__img'
           src={image}/>
        <button onClick={addToBasket} className='product__button'>Add to Basket</button>
      
    </div>
  )
}

export default Product
