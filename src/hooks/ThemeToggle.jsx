import React, { useState } from 'react'

export const ThemeToggle = () => {
    const theme = {
        darkTheme: {
            backgroundColor: "gray",
            color: 'white'

        },
        lightTheme: {
            backgroundColor: 'white',
            color: 'gray'

        }
    }
    const [state, setState] = useState(false);
    const myFun = () => {
        setState(true);
    }
    return (
        <div className=' flex flex-col items-center justify-center space-y-4'>
            <button className='border-2 border-black bg-blue-400' onClick={() => setState(prevState => !prevState) }>click-me</button>
            <div style={state ?theme.darkTheme : theme.lightTheme}>
                <p className=' py-4 m-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore delectus sit incidunt quibusdam error quo pariatur. Sunt saepe dignissimos a architecto eveniet laudantium quasi quos, nostrum dolores eos rem soluta.</p>
            </div>
        </div>
    )
}
