import React from 'react'
import { GiShoppingBag } from "react-icons/gi"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const { cartProductIds } = useSelector((state) => state.cart)
  return (
    <div className=' flex justify-between max-w-lg mx-auto bg-blue-300 px-4 py-4 rounded-sm'>
      <p className=' text-3xl font-bold'>RoboDemo</p>
      <Link to="/cart" className=' flex relative'>
        <GiShoppingBag size={27} />
        <p className="absolute left-4 bottom-6 rounded-full bg-yellow-400 px-2">{cartProductIds.length}</p>

      </Link>
    </div>
  )
}

export default Navbar