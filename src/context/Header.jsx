import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartValue } from './Context'



export const Header1 = () => {
    const {cart,setCart} = useContext(CartValue);
  return (
    <div className=''>
        <span className='text-3xl font-bold items-center justify-center flex'>This is context api cart</span>
        <ul className='flex flex-row bg-yellow-300 py-3 items-center justify-between'>
            <li className=''>
                <Link to="/">Home Page</Link>
            </li>
            <li>
            <Link to="/cart">Cart Page ({cart.length})</Link>
            
            </li>
        </ul>
    </div>
  )
}
