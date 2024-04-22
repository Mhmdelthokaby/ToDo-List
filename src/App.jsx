import React, { useCallback, useRef, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import '../src/App.css'

const App = () => {

  const[todo, SetTodo] = useState([])
  const inputRef = useRef()
  
  const handleTODO =()=>{
    const text = inputRef.current.value
    if(text=="")
    return
    const newtext= {completed : false ,text}
    SetTodo([...todo,newtext])
    inputRef.current.value=""

  }

  const handleItemDone = (index) =>{
    const newtodo= [...todo]
    newtodo[index].completed = !newtodo[index].completed
    SetTodo(newtodo)
  }

  const handleDeleted =(index)=>{
    const newtodo= [...todo]
    newtodo.splice(index,1)
    SetTodo(newtodo)
  }
  
  return (
    <>
      <div className='bg-dark text-white '>
      <div className='container '>
      <div className="w-75 m-auto d-flex justify-content-center align-items-center vh-100">
        <div className='w-100'>
        <div className='vstack gap-3 '>
            <h1 className='text-center '>To Do List</h1>
            <ul className='fs-4 list-unstyled'>
              {todo.map((item ,index)=>(
              <div className='docursor'>
                <div  className='d-flex justify-content-between'>
                <div className='d-flex hstack gap-2'>
                  <span>{index+1}.</span>
                  <li className={item.completed ? "done":""} key={index} onClick={()=>handleItemDone(index)}>{item.text}</li>

                </div>
                <div>
                <i className="fa-solid fa-trash text-danger" onClick={()=>handleDeleted(index)}></i>
                </div>
              </div>
              </div>
              ))}
            </ul>
            <input className='form-control fs-4' type="text" ref={inputRef} placeholder='Enter item....' />
            <button className='btn btn-success text-white' onClick={handleTODO} >Add</button>
        </div>
        </div>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default App
