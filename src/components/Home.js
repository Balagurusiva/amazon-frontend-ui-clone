import React from 'react'
import './style/home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
       <div className='home__container'>
         <img
           className='home__img' 
           src='https://m.media-amazon.com/images/I/61+9JgHrVmL._SX3000_.jpg'
         />

         <div className='home__row'>
            <Product
              id="1"
              title="boAt Rockerz 550 Bluetooth Wireless Over Ear Headphones with Mic Upto 20 Hours Playback, 50MM"
              image='https://m.media-amazon.com/images/I/31wIr9DO-mL._AC_SY400_.jpg'
              rating='⭐⭐⭐'
              price='132' />
            <Product
              id="2"
              title="Boult Audio X30 True Wireless in Ear Earbuds with 40H Playtime, Quad Mic ENC, 45ms Xtreme Low Latency"
              image='https://m.media-amazon.com/images/I/71ey9w1JYTL._AC_UY327_FMwebp_QL65_.jpg'
              rating='⭐⭐⭐⭐'
              price='234' />
         </div>
         <div className='home__row'>
            <Product 
              id="3"
              title="Lenovo IdeaPad Slim 3 Intel Core i5 11th Gen "
              image='https://m.media-amazon.com/images/I/61q6x-ll5FL._AC_UY327_FMwebp_QL65_.jpg'
              rating='⭐⭐⭐⭐'
              price="289"
            />
            <Product
              id="4"
              title="Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch "
              image='https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY327_FMwebp_QL65_.jpg'
              rating='⭐⭐⭐⭐⭐'
              price='234'
              />
            <Product 
              id="5"
              title="Apple 2021 iMac with 4.5K Retina Display (24-inch/60.96 cm, M1 chip with 8‑core"
              image='https://m.media-amazon.com/images/I/71eXNIDUGjL._AC_UY327_FMwebp_QL65_.jpg'
              rating='⭐⭐⭐⭐⭐'
              price="549"
            />
          </div>
         <div className='home__row'>
            <Product 
              id="6"
              title="Maggi 2-Minute Masala Instant Noodles, 70 grams (Pack of 12)"
              image='https://m.media-amazon.com/images/I/81Xzx5PHTFL._AC_UL480_FMwebp_QL65_.jpg'
              rating='⭐⭐'
              price="20"
            />
         </div>
       </div>
    </div>
  )
}

export default Home
