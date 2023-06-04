import React, { useState } from 'react'

export const MyAccordian = ({ question, answer }) => {
    const [show,setShow] = useState(false);
    const myFun = () => {
        setShow(!show);
    }
    return (
        <>
            <div className='flex items-center justify-center space-x-6 bg-gray-400'>
                <p className=' flex w-[40px] h-[100px] items-start justify-start  py-8 -px[40px] hover:cursor-pointer' onClick={myFun}>{show ? "Hide" : "show"}</p>
                <h3 className=' px-4 w-[150px]'>{question}</h3>
            </div>
            {
                show && <p className='bg-green-500 px-10 py-3'>{answer}</p>
            }
        </>
    )
}
