import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";


export const NewTodoList2 = (props) => {
    const[flag,setFlag] = useState(false);
    const onClickFun = () => {
        setFlag(true);
    }
    return (
        <div className='flex flex-row space-x-2 py-2'>
            <span onClick={onClickFun}>
                <AiOutlineDelete size={30} style={{ backgroundColor: "red" }} className='space-y-3 ' />
            </span>
            <li style={{textDecorationLine: flag? "line-through" :"none"}} >{props.value}</li>
        </div>
    )
}
