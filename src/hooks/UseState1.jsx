import React, { useState } from 'react'

export const UseState1 = () => {
    const [isLoading, setIsLoading] = useState(true);
  return (
    <div className='flex flex-col'>
        <h1>useState example with loading page</h1>
        {/* <button className='border-2 border-black bg-blue-500' onClick={()=>setIsLoading(!isLoading)}>Click-Me</button> */}
        <button className='border-2 border-black bg-blue-400' onClick={() => setIsLoading((prevState) => !prevState)}> click-me</button>
        {/* <button className='border-2 border-black bg-blue-500' onClick={() => setIsLoading((prevState) => !prevState)}>Click-Me</button> */}
        {isLoading ? '.loading...' : <h2>Data has arrived from the server </h2>}
    </div>
  )
}
