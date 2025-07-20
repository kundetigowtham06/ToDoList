import React from 'react'
import tick_icon from '../assets/tick.png'
import not_tick_icon from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

const TodoItems = ({text,id,iscomplete,deletetodo,toggle}) => {
  return (
    <div onClick={()=>{toggle(id)}} className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={iscomplete? tick_icon:not_tick_icon} alt="" className='w-7' />
            <p className={`text-slate-700 ml-4 text-[17px]
                ${iscomplete ? "line-through":" "}`}>{text}</p>
        </div>
        <img onClick={()=>{deletetodo(id)}} src={delete_icon} alt="" className='w-3.5 cursor-pointer' />

    </div>
  )
}

export default TodoItems