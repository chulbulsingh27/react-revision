import React, { useContext } from 'react'
import { CartValue } from './Context'
export const SingleProduct = ({ prod}) => {

    const {cart,setCart} = useContext(CartValue)
    return (
        <div>
            <img src={prod.image} alt={prod.name} />
            <div className="productDesc">
                <span style={{ fontWeight: 700 }}>{prod.name}</span>
                <span>₹ {prod.price.substring(0, 3)}</span>
            </div>
            <button className="add" onClick={()=>{setCart([...cart , prod])}}> Add to Cart </button>
            <button className="add" onClick={() => {setCart(cart.filter(c=>c.id !== prod.id))}}> Remove from Cart </button>
        </div>
    )
}
