import React from 'react'
import { TODO_ACTIONS } from './TodoUseReducer'

export const TodoUseReducer1 = ({todos,dispatch}) => {
    return (
        <div>
            {todos.map(todo => (<li key={todo.id}>{todo.name} <span>
                <button className='border-2 border-black bg-blue-400 m-2 rounded-md' onClick={() => dispatch({ type: TODO_ACTIONS.DELETE_TASK, payload: todo.id })}>delete</button></span></li>))}
        </div>
    )
}
