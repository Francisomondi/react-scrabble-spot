import React, { useState } from 'react'

const Todo = () => {

    const [todo,setTodo]=useState("")
    const[todoList, setTodoList]=useState([])

    const handleChange=(event)=>{
        setTodo(event.target.value)
     
    }

    const handleSubmit= (event)=>{
        event.preventDefault()

        let tempList= todoList
        tempList.push(todo)

        setTodoList(tempList)
        console.log(tempList)
        setTodo('')

    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label >To do Item</label>
        <input value={todo} type='text' placeholder='my todo Item' onChange={handleChange}/>
        <button type='submit'>Add todo</button>
    </form>

    {todoList.map((item)=>(
        <div>{item}</div>
    ))}
    </div>
  )
}

export default Todo
