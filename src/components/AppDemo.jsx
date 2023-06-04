import React from 'react';
import { useState } from 'react';
import { TodoLists } from './TodoLists';



export const AppDemo = () => {
    const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const deleteItems = (id) => {
    console.log('delete');
    setItems((oldItem)=>{
      return(
        oldItem.filter((arrElem,index)=>
        {return(
          index !== id
        )
        })
      )
    })
  }
  const onChangeFun = (event) => {
    setText(event.target.value);
  }
  const listOfItems = () => {
    setItems((oldItems) => {
      return (
        [...oldItems, text]
      )
    })
    setText("");

  }
  return (
    <div className="w-[1840px] h-[960px] bg-blue-300 relative py-32 px-[600px] flex flex-row">
      <div className='w-[400px] border-2 border-black h-[500px]  items-center justify-center p-8 bg-white absolute  rounded-md ' >
        <br />
        <h1 className='bg-cyan-500 w-[300px]  fles flex-row items-center justify-center text-center py-3'>ToDo List</h1>
        <br className='' />
        <input type="text" placeholder='Add a Items' className='items-center justify-center outline-none' onChange={onChangeFun} value={text} />
        <hr className='border border-black' />
        <button className='bg-blue-800 px-3 mt-3 flex flex-row rounded-lg hover:bg-green-600' onClick={listOfItems}>Add </button>
      
        <ol>
          {items.map((item, index) => {
            return (
              <TodoLists value={item} key={index} id={index} onSelect={deleteItems} />
            )
          })}
        </ol>
      </div>
    </div>
  )
}
