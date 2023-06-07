import React, { useMemo, useState } from 'react';
import { UsersCard } from './UsersCard';
export const UsersHooks = () => {
  const [counter, setCounter] = useState(0);
  const usersList = [
    { id: 1, name: "chulbul" },
    { id: 2, name: "rahul" },
    { id: 3, name: "pritam" },
  ]
  const [users, setUsers] = useState(usersList);
  // const [useDetails,setUserDetail] = useState("");
  
  const setUserDetail = (value) => {
    setUsers([...users,{id:users.length+1,name:value}])
  }
  // const displayList = users.map(user=>{
  //   console.log('chulbul')
  //    return(
  //   <UsersCard data={user} key={user.id}/>
  // )})
  const displayList = useMemo(() => users.map(user => {
    console.log('chulbul')
    return (<UsersCard data={user} key={user.id} />)
  }), [users])
  return (
    <div>
      useMemeo Hook
      <p>{counter}</p>
      <button className='border-2 border-black bg-blue-500 rounded-md m-2 p-2' onClick={() => setCounter(counter + 1)}>click-me </button>
      <br/>
    
      Enter Name : <input className='border-2 border-black  bg-blue-300 p-2 m-2' onBlur={(event) => setUserDetail(event.target.value)}></input>
      <h1 className='text-black'></h1>
      {displayList}
    </div>
  )
}
