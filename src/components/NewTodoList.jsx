import React, { useState } from 'react'
import { AiOutlineDelete } from "react-icons/ai";
import { NewTodoList1 } from './NewTodoList1';
import { NewTodoList2 } from './NewTodoList2';

export const NewTodoList = () => {
    const[item,setItem] = useState('');
    const onChangeFun = (event) => {
        setItem(event.target.value);
    }
    const [addItem,setAddItem] = useState([]);
    const onSubmitFun1 = () =>{
        console.log('hello')
        setAddItem((prevVal)=>{
            return(
                [...prevVal,item]
           )
        })
        setItem("");

    }
    const deleteFun = (id)=> {
        console.log('delete')
        setAddItem((oldVal)=>{
            return(
                oldVal.filter((arrElem,index)=> {
                    return(
                        index !== id
                    )
                })

            )
        })
    }
  return (
    <div className="w-[1840px] h-[960px] bg-blue-300 relative py-32 px-[600px] flex flex-row">
        <div className='w-[400px] border-2 border-black h-[500px]  items-center justify-center p-8 bg-white absolute  rounded-md '>
        <br />
        <h1 className='bg-cyan-500 w-[300px]  fles flex-row items-center justify-center text-center py-3'>ToDo List</h1>
        <br className='' />
        <input className='items-center justify-center outline-none'type="text"  value = {item} onChange={onChangeFun}/>
        <hr className='border border-black' />
        <button className='bg-blue-800 px-3 mt-3 flex flex-row rounded-lg hover:bg-green-600' onClick={onSubmitFun1}>Add</button>
        <ol>
            {addItem.map((element,index) =>{
                return(
                    <NewTodoList2 value={element} key={index} id={index} className="bg-blue-500"/>
                    
                    // <NewTodoList1 value={element} key={index} id={index} onSelect={deleteFun}  className="bg-blue-500"/>
                )
            })}
        </ol>

        </div>

    </div>
  )
}
