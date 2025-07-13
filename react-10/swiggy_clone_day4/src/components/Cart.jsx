import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, removeItem } from '../utils/CartSlice';

function Cart() {

    const cartItems = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch()
    function clearCartHandler(){
        dispatch(clearCart())
    }
    function deleteItemHandler(foodItem){
        dispatch(removeItem())
    }
  return (
    <div>
        <h1 className='text-2xl font-bold'>CART ITEMS</h1>
        <button onClick={()=>clearCartHandler()} > ClearCart </button>

        {
            cartItems.map((foodItem)=>{
                return (
                    <div className="flex w-3/4 mx-auto mb-10 border-b-4 p-4">
                        <div className="flex flex-col w-3/4">
                        <h1>{foodItem.card.info.name}</h1>
                        <h1>{foodItem.card.info.defaultPrice / 100} /-</h1>
                        <h1>{foodItem.card.info.category}</h1>
                        </div>
                        <img
                        className="w-52 h-44 rounded-md border shadow-lg border-gray-100"
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${foodItem.card.info.imageId}`}
                        alt="" />
                        <button onClick={()=>deleteItemHandler(foodItem)} >Delete Item</button>
                    </div>
                );
            })
        }
    </div>
  )
}

export default Cart