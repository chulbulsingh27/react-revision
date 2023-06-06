import React, { useState } from 'react'


export const UseArray = () => {
    
    const userList = [{id:1,name:"rahul"},{id:2 , name:"chulbul"}]
    const [value,setValue] = useState(userList);
    const myFun = (newUser) => {
        console.log({newUser})
        setValue([
            ...value,{id:value.length,name:newUser}
        ])

    }
  return (
    <div>
        <h1>Use State using array </h1>
        <form>
            <label>
                Add User : 
                <input type="text " name="name" className='border-2 border-black' onBlur={(event) => myFun(event.target.value)}/>
            </label>
        </form>
        <p>{JSON.stringify(value)}</p>
    </div>
  )
}
