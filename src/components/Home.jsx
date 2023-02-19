import React from 'react'
import productList from "../data/productsList.json"
import cartSlice from '../data/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();
  const { cartProductIds } = useSelector((state) => state.cart)

  return (
    <div className=' grid grid-cols-2 place-items-center  md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-9 p-7'>
      {productList.products.map((product) => {
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
  )
}

export default Home