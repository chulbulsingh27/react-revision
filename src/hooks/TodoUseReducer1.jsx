import React, { useContext } from 'react'
import TodosContext from '../context/TodoContext'

import { TODO_ACTIONS } from './TodoUseReducer'

export const TodoUseReducer1 = () => {
    const {todos,dispatch} = useContext(TodosContext);
    console.log(todos)
    return (
        <div>
            {todos.map(todo => (<li key={todo.id}>{todo.name} <span>
                <button className='border-2 border-black bg-blue-400 m-2 rounded-md' onClick={() => dispatch({ type: TODO_ACTIONS.DELETE_TASK, payload: todo.id })}>delete</button></span></li>))}
        </div>
    )
}
