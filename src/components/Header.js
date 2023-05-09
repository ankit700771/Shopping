import React from 'react'
import logo from '../logo.png';
import {BsFillCartFill} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {

    const {cart} = useSelector((state) => state)

  return (
    <div className='flex justify-center items-center bg-gray-800'>
        <div className='flex w-[80%] justify-between'>
            <div className='flex justify-center items-center'>
                <NavLink to='/'>
                    <img src = {logo} width={80}></img>
                </NavLink>
                
            </div>

            <div className='flex items-center justify-center py-3 gap-3'>
                <NavLink to="/">
                    <span className='text-white font-medium'>Home</span>
                </NavLink>
                
                <div className='relative'>
                <NavLink to="/cart">
                    <BsFillCartFill  className='text-white'/>
                        {
                            cart.length > 0 ? (<div className='border w-[20px] absolute text-center bg-lime-400 rounded-full animate-bounce top-0 left-2'>{cart.length}</div>): (<div></div>)
                        }
                </NavLink>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Header;