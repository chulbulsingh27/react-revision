import React, { useState } from 'react'
import { Users } from './Users'
import Usercontext from './context/UserContext'

export const UserDashBoard = () => {
  const [user,setUser] = useState("");
  const users = {
    userName : user,
    updatedValue : setUser
  }
  // const users = {
  //   userName:"chulbul",
  //   age:24,
  //   Email:"cs@gmail.com",

  // }

  return (
    < Usercontext.Provider value={users}>
      <p className='text-2xl font-bold'>Usercontext Hook</p>
      {/* <button className='border-2 border-black rounded-md bg-blue-300'onClick={() => setUser("chulbul singh")}>update value</button> */}
      <Users />
    </Usercontext.Provider>
  )
}
