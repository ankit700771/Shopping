import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { add, remove } from '../redux/slice/CartSlice';

function CartItem({item}) {

    const dispatch = useDispatch()
    const {cart} = useSelector((state) => state);
    const title = item.title.length > 15 ? item.title.slice(0, 15) : item.title;
    const description = item.description.length > 60 ? item.description.slice(0,60) : item.description;

    function addFromCart() {
        dispatch(add(item));
        toast.success("Item added to the Cart")
        
    }

    function removeFromCart() {
        dispatch(remove(item.id));
        toast.success("Item remove from Cart");
    }

  return (
    <div className='w-[250px] flex flex-col items-center justify-center rounded-md shadow-md shadow-slate-200 mt-3'>
        <div className=''>
            <p className='font-bold text-zinc-950'>{title}</p>
        </div>

        <div className='w-[90%] m-auto'>
            <p className='text-xs font-medium mt-2 text-gray-500 text-center'>{description}</p>
        </div>

        <div className='w-[50%]'>
            <img className='h-[200px] object-contain' src={item.image}></img>
        </div>

        <div className='flex w-full mt-3 justify-between items-center mb-3'>
            <p className='text-lime-500 font-bold ml-3'>${item.price}</p>
            <div>
                {
                    cart.some((p) => p.id === item.id) ? (<button onClick={removeFromCart} className='border-2 py-1 px-3 font-bold rounded-2xl border-black mr-3'>Remove to cart</button>) : (<button onClick={addFromCart} className='border-2 py-1 px-3 font-bold rounded-2xl border-black mr-3'>Add to cart</button>)
                }
            </div>
        </div>
    </div>
  )
}

export default CartItem