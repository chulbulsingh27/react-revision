import React, { useState } from 'react'
const initialavlue = {
    username:"",
    password:"",
}

export const UseForm = () => {
    const [value,setvalue] = useState(initialavlue)
    const handleFun = (e) => {
        setvalue({...value,[e.target.name] : e.target.value})

    }

  return (
    <div>
        <h1>useState for handling object type</h1>
        <p>{JSON.stringify(value)}</p>
        <form>
            <label>UserName:
                <input type="text" name="username" className='border-2' onChange={handleFun}/>
            </label>
            <br/>
            <label>Password:
                <input type="text" name="password" className='border-2' onChange={handleFun}/>
            </label>
        </form>

    </div>
  )
}
