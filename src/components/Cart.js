import { useState , useEffect } from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import AddIntoCart from './AddIntoCart';

function Cart() {

  const {cart} = useSelector((state) => state);
  const [totalAmount , setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc , curr) => acc + curr.price , 0));
  },[cart])
  
 

  return (
    <div>
      {
        cart.length > 0 ?(
          <div className='flex justify-center gap-10 flex-wrap'>
            <div className='flex flex-col flex-wrap justify-evenly'>
              {
                cart.map((item) => {
                  return <AddIntoCart item = {item}/>
                })
              }
            </div>

            <div className='flex flex-col justify-between max-w-[300px] mt-10 mr-8'>
              <div>
                <p className='text-lime-600 ml-3'>YOUR CART</p>
                <h1 className='text-5xl text-lime-600 ml-3 mt-2'> SUMMARY</h1>
                <p className='ml-3 mt-2'>Total Item : <span>{cart.length}</span></p>
              </div>


              <div className=''>
                <p className='ml-3 mb-4'>Total Amount : ${totalAmount}</p> 
                <button className='w-full border-2 border-lime-500 text-lime-600 font-semibold rounded-md hover:border-lime-800 py-1 mb-4'>Cheeckout Now</button>
              </div>
        </div>

          </div>


        ):
        (
          <div className='border flex flex-col justify-center items-center h-screen gap-3'>
            <h2 className='font-semibold'>Go for Shopping</h2>

            <NavLink to='/'>
              <button className='border py-1 px-1 border-lime-500 text-lime-600 font-semibold rounded-md hover:border-lime-800'>Shopping</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart