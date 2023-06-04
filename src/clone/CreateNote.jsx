import React, { useState } from 'react'

import { AiOutlinePlus } from 'react-icons/ai';

export const CreateNote = (props) => {
    const [expand,setExpand] = useState(false);
    const [note, setNote] = useState({
        title: '',
        content: '',
    })
    const inputEvent = (event) => {
        //event.preventDefault()
        const { name, value } = event.target;
        //event.preventDefault()
        setNote((prevVal) => {
            return {
                ...prevVal,
                [name]: value,
            }
        })
        //event.preventDefault()
        console.log(note)
    }
    const addEvent = (event) => {
        event.preventDefault();
        props.passNote(note);
        setNote({
            title: '',
            content: '',
        });
    }
    const onClickFun = () => {
        setExpand(true);
    }
    const doubleClickFun = () => {

        setExpand(false);
    }
    return (
        <div className='w-[500px] h-[350px] bg-blue-400' onDoubleClick={doubleClickFun}>
            <form className='flex flex-col  p-4 m-4 space-y-4 bg-gray-400  font-bold  '>
                {expand ?<input type="text" placeholder='title' name="title" value={note.title} onChange={inputEvent} className='py-2 m-4 p-4 rounded-md ' /> : null}

                <textarea name="content" id="" cols="" rows="" value={note.content} onChange={inputEvent} placeholder='write a note ...' className='px-20 py-6 rounded-md' onClick={onClickFun}></textarea>
                {expand ? <button className='flex items-end justify-end' onClick={addEvent} >
                    <AiOutlinePlus width={50} height={40} style={{ backgroundColor: "green" }} />

                </button>: null}
            </form>
        </div>
    )
}
