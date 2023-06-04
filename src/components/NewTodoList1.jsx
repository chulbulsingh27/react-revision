import React from 'react'
import { AiOutlineDelete } from "react-icons/ai";

export const NewTodoList1 = (props) => {
    return (
        <div className='flex flex-row space-x-2 py-2'>
            <AiOutlineDelete size={30} style={{ backgroundColor: "red" }} className='space-y-3 ' onClick={() =>{props.onSelect(props.id)}}/>
            <li key="index">{props.value}</li>
        </div>
    )
}
