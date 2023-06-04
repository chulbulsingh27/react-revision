import React, { useState } from 'react'
//import {Clock}from 'react-clock';


export const Task1 = () => {
    const [value,setValue] = useState(0);
    const incrementFun = () => {
        setValue(value+1);
    }
    const [value1,setValue1] = useState(0);
    const decrementFun = () => {
        setValue(value-1);
        if(value === 0){
            setValue(value);
            alert("value cannot be less than zero")
        }
    }
    return (
        <div className='w-[1840px] h-[960px] bg-blue-300 relative py-32 px-[600px] flex flex-row'>
            <div className='w-[400px] border-2 border-black h-[500px]  items-center justify-center p-12  bg-white absolute  rounded-md'>
                <p className='w-[40px] bg-slate-500 text-white px-32 m-8 py-3'>{value}</p>
                <div className='flex flex-row '>
                    <button className='bg-blue-500 border-2 flex justify-start mx-8' onClick={incrementFun}>INCR</button>
                    <button className='bg-blue-500 border-2 mx-32 ' onClick={decrementFun}>DECR</button>
                </div>
            </div>
        </div>
    )
}
