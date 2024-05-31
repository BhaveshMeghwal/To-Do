import React,{ useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../app/todoSlice'

const AddTodo = () => {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
  return (
    <form className='addtodo-form' onSubmit={addTodoHandler}>
        <input className='addtodo-input' placeholder='What do you need to do?'  type='text' value={input} onChange={(e)=>{setInput(e.target.value)}}></input>
        <button className='addtodo-btn'  type='submit'>+ Add</button>
    </form>
  )
}

export default AddTodo