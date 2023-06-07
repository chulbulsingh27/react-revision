import React, { useContext } from 'react'
import Usercontext from './context/UserContext'
export const Details = () => {
  const {updatedValue}= useContext(Usercontext);
  console.log(updatedValue);
  
  return (
    <div>
      Details 
      <button className='border-2 border-black runded-md bg-blue-300' onClick={() => updatedValue("chulbul singh")}> update button</button>
    </div>
  )
}
