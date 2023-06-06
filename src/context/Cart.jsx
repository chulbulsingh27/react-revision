import React, { useContext, useEffect, useState } from 'react'
import { CartValue } from './Context'
import { SingleProduct } from './SingleProduct'


export const Cart = () => {
    const [total, setTotal] = useState()
    const {cart, setCart} = useContext(CartValue);
    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])

    return (
        <div>
            <span style={{}}>My-Cart</span>
            <br />
            <span>Total: {total}</span>
            <div>{
              cart.map((prod)=> (
                <SingleProduct prod = {prod} key={prod.id} />

              ))
            }</div>
        </div>
    )
}
