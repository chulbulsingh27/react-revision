import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

export const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id)
    }
    return (
        <div className=' '>
            <div className='w-[200px] h-[200px] bg-red-300 text-center rounded-lg'>
                <h1 className='text-white font-bold'>{props.title}</h1>
                <br />
                <div className='flex flex-col space-x-4'>
                    <p className='text-white font-bold'>{props.content}</p>
                    <button>
                        <AiOutlineDelete width={50} height={50} style={{ backgroundColor: "pink" }} className='' onClick={deleteNote}/>
                    </button>
                </div>
            </div>
        </div>
    )
}
