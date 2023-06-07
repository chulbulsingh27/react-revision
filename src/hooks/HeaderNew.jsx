import React, { useContext } from 'react'
import TodosContext from '../context/TodoContext'


export const HeaderNew = () => {
    const {todos} = useContext(TodosContext)
    //console.log(data);
  return (
    <div>
    Todos :{todos.length}
    </div>
  )
}
