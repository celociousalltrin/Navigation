import React from 'react';
import {GetTodo} from "../feature/todoSlice";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Toredx = () => {
const TodoList = useSelector((state)=>state.todoInfo.value)
    const dispatch = useDispatch()

    useEffect(()=>{
      dispatch(GetTodo())
    },[dispatch])
  return (
    <div>
        {
            TodoList.map((item)=>{
                return(
                    <div key={item.id}>
                        <h1>{item.title}</h1>
                        <p>{item.body}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Toredx;