import React from 'react';
import { remove } from '../redux/slice/CartSlice';
import { useDispatch} from 'react-redux';
import {MdOutlineDeleteOutline} from 'react-icons/md';

function AddIntoCart({item}) {

    const dispatch = useDispatch();
    
    const description = item.description.length > 90 ? item.description.slice(0,90) : item.description;

    function deleteFromCart() {
      dispatch(remove(item.id));
    }


    return (
        <div className='border-b-2 border-gray-500 flex max-w-[500px] gap-6 mt-4'>
            <div className='w-[40%] mb-4 ml-3'>
                <img className=' object-contain' src={item.image}></img>
            </div>
            <div className='flex flex-col'>
                <p className='font-light mr-3'>{item.title}</p>
                <p className='text-xs font-medium mt-4 text-gray-500 text-center mr-3'>{description}</p>

                <div className='mt-10 flex justify-between'>
                    <p className='text-lime-500 font-bold ml-3'>${item.price}</p>
                    <button className='border mr-3 py-2 px-2 bg-red-300 rounded-full mb-4' onClick={deleteFromCart}><MdOutlineDeleteOutline /></button>
                </div>
        </div>


        

    </div>
  )
}

export default AddIntoCart