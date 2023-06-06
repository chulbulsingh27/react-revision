import React, { useEffect, useState } from 'react'

export const EffectHook = () => {
    const [refresh,setRefresh] = useState(false);
    const myFun = () => {
        setRefresh(!refresh)
    }
    function getUser(){
        const url = 'https://jsonplaceholder.typicode.com/users'
        return(
            fetch(url).then(data=>data.json())
        )
    }
    const [userLists,setUserLists] = useState([]);
    useEffect(()=> {
        getUser().then(result=>setUserLists(result))
    },[refresh])
    //     console.log('https://jsonplaceholder.typicode.com/users');
    //     return ()=> {
    //         console.log('unmounting phase');
    //     }
    // },[counter])
    
  return (
    <div className='flex flex-col  items-center justify-center py-24 '>
        <h1>User componenet</h1>
        <button className='border-2 border-black rounded-md bg-blue-300 ' onClick={()=> setRefresh(prevState => ! prevState) }>Refresh</button>
        {userLists.map(user =><li key={user.id}>{user.name}</li>)}
        {/* <h1>count : {counter}</h1> */}
        
    </div>
  )
}
