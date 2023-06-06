import React, { createContext, useState } from 'react'
export const CartValue = createContext();

export const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <CartValue.Provider value={{ cart, setCart }}>
        {children}
      </CartValue.Provider>
    </div>
  )
}
