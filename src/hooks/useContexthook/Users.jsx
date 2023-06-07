import React, { useState } from 'react'
import { Details } from './Details'
import { useContext } from 'react'
import Usercontext from './context/UserContext'
export const Users = () => {
  const data = useContext(Usercontext)
  console.log(data);
  return (
    <div>
        Users Details:{data.userName}
        {/* <br/>
        Name: {data.userName}
        <br/>
        Age: {data.age}
        <br/>
        Email : {data.Email}
         */}
        <Details />
    </div>
  )
}
