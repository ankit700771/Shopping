import React from 'react'
import CartItem from './CartItem';
import {products} from '../data'
function Home() {
  console.log(products)
  return (
    <div className='max-w-[1200px] flex flex-wrap justify-center items-center gap-3 mt-3 mb-4'>
      {
        products.map((item) => (
          <CartItem key={item.id} item = {item}/>
        ))
      }
    </div>
  )
}

export default Home