import React, { useEffect } from 'react'
import productList from "../data/productsList.json"
import cartSlice from '../data/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../data/productSlice'

const Home = () => {
  const { addToCart, removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();
  // const { cartProductIds } = useSelector((state) => state.cart)
  const state = useSelector((state) => state)
  const { cart, products } = state

  useEffect(() => {
    dispatch(fetchAllProducts('http://localhost:3000/products'))
  }, [dispatch])

  return (
    <div className=' grid grid-cols-2 place-items-center  md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-9 p-7'>
      {products.data?.map((product) => {
        return (
          <div className=' flex flex-col space-y-1 border w-max h-max py-2 px-2 shadow-[5px_5px_0px_0px_rgba(109,40,217)] justify-center items-center' key={product.id}>
            <img src={product.imageUrl} alt='product image' className='h-28 w-52 object-contain' />
            <p>{product.name}</p>
            <p className=' font-bold font-mono'>Price: ${product.price}</p>

            {!cart.cartProductIds.includes(product.id) && (<button className='px-2 py-1 bg-green-500 text-white w-max' onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>)}

            {cart.cartProductIds.includes(product.id) && (<button className='px-2 py-1 bg-red-500 text-white w-max' onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>)}
          </div>
        )
      })}
    </div>
  )
}

export default Home

