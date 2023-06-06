import React, { useState } from 'react'

export const UseState = () => {
    const [title,setTitle] = useState('Good morning');
    const myFun = () => {
        setTitle('Good evening');
    }
  return (
    <div>
        <h1>{title}</h1>
        <button className='border-2 border-black bg-blue-500' onClick={() => setTitle('Good Morning')}>Click-Me</button>
        <button className='border-2 border-black bg-blue-500' onClick={myFun}>Click-Me</button>
    </div>
  )
}
