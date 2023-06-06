import React, { useReducer } from 'react'
import { TodoUseReducer1 } from './TodoUseReducer1';
const initialState = []
 export const TODO_ACTIONS = {
    ADD_TASK: 'add_task',
    DELETE_TASK: 'delete_task',
    RESET_TODOS : 'reset_todos'
}
function reducer(state, action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD_TASK: return ([
            ...state, {
                id: state.length + 1,
                name: action.payload
            }
        ]);
        case TODO_ACTIONS.DELETE_TASK: return (
            state.filter(c => c.id !== action.payload)
        )
        case TODO_ACTIONS.RESET_TODOS : return init(action.payload)
        default: return state;
    }
}
function init(initialState) {
    return initialState;
}
export const TodoUseReducer = () => {

    const [todos, dispatch] = useReducer(reducer, initialState, init);

    return (
        <div className='flex items-center justify-center '>
            <p className=' m-10 text-xl font-bold'>Todo List : {todos.length} </p>
            <div className='flex flex-col items-center justify-center py-10'>
                <p className='m-4'>Add new task : </p>
                <input type='text' className='border-2 border-black ' onBlur={(event) => dispatch({ type: TODO_ACTIONS.ADD_TASK, payload: event.target.value })} />
                <button className='border-2 border-black bg-blue-300 rounded-md m-4'onClick={()=>dispatch({type:TODO_ACTIONS.RESET_TODOS,payload:initialState})}>reset</button>
                <hr />
                <TodoUseReducer1 todos={todos} dispatch={dispatch}/>
            </div>
        </div>
    )
}
