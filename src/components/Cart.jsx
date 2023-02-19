import React from 'react'
import cartSlice from '../data/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import productList from "../data/productsList.json"

const Cart = () => {
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();
  const { cartProductIds } = useSelector((state) => state.cart)
  const cartItems = productList.products.filter((product) => cartProductIds.includes(product.id))

  return (
    <>
      <div className=' grid grid-cols-2 place-items-center  md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-9 p-7'>
        {cartItems.map((product) => {
          return (
            <div className=' flex flex-col space-y-1 border w-max h-max py-2 px-2 shadow-lg justify-center items-center' key={product.id}>
              <img src={product.imageUrl} alt='product image' className='h-28 w-52 object-contain' />
              <p>{product.name}</p>
              <p className=' font-bold font-mono'>Price: ${product.price}</p>

              {!cartProductIds.includes(product.id) && (<button className='px-2 py-1 bg-green-500 text-white w-max' onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>)}

              {cartProductIds.includes(product.id) && (<button className='px-2 py-1 bg-red-500 text-white w-max' onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>)}
            </div>
          )
        })}
      </div>
      <div className='flex justify-center items-center'>
        {cartItems.length < 1 && (
          <p className=' text-4xl py-5 bg-red-400 px-4 rounded-md'>Your cart seems to be empty!</p>
        )}
      </div>
    </>
  )
}

export default Cart