import React, {  useEffect, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
import { useRef } from 'react';

const Todo = () => {
    let [todolist,settodolist] = useState(localStorage.getItem("todos")?
JSON.parse(localStorage.getItem("todos")):[]);
    const inputref=useRef();
    const add=() =>{
        let inputText= inputref.current.value;
        if(inputText.trim() === "") {
            return;
        }
        const newtodo={
            id: Date.now(),
            text: inputText,
            iscompleted: false
        }
        settodolist((prev)=>[...prev, newtodo]);
        inputref.current.value = "";
    }
    const deletetodo=(id)=>{
        settodolist((prevtodos)=>{
            return prevtodos.filter((todo)=> todo.id!== id)
        })
    }
    const toggle=(id)=>{
        settodolist((prevtodos)=>{
            return prevtodos.map((todo)=>{
                if(todo.id===id){
                    return{...todo,iscompleted:!todo.iscompleted}
                }
                return todo;
            })

        })
    }
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todolist));
    },[todolist])
  return (
    <div className='bg-white place-self-center w-11/12  p-7 max-w-md  flex flex-col min-h-[550px] rounded-xl'>
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={todo_icon} alt="todo" />
            <h1 className='text-3xl font-semibold'>TODO List</h1>

        </div>
        <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input ref={inputref} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your Task' />
            <button onClick={add} className='border-none rounded-full bg-orange-600 text-lg font-medium cursor-pointer w-32 h-14 text-white'>Add +</button>
        </div>
        <div>
            {todolist.map((item,index)=>{
                return <TodoItems key={index} text={item.text} id={item.id} iscomplete={item.iscompleted} deletetodo={deletetodo} toggle={toggle} />
            })}
            
        </div>

    </div>
  )
}

export default Todo