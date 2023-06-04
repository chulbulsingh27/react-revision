import React from 'react'
import logo  from '../images/keep.png'

export const Header = () => {
    return (
        <div>
            <div className='w-[1840px] bg-yellow-500 flex flex-row py-3'>
                <img src={logo} alt='' width={60} height={60} />
                <h1 className='py-4 text-lg font-bold text-white'>Keep Clone</h1>
            </div>
        </div>
    )
}
