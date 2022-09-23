import React from 'react';
import {useEffect, useState} from "react";
import { GetData, addUser, updateUser, deleteUser } from '../feature/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

const Redx = () => {
    const [username, setUsername] = useState("")
    const [name,setName] = useState("")
    const [upname, setUpname] = useState("")
const dispatch = useDispatch()

const UserList = useSelector((state)=>state.userInfo.value)

useEffect(()=>{
  dispatch(GetData())
    },[dispatch])

    const AddUser = (()=>{
        const OBJ = {
            id:Math.random(),
            username:username,
            name:name,
        }
        return (
         dispatch(addUser(OBJ))
        )
    })
  return (
    <div>
         <input type="text" placeholder='name..' onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder='name..' onChange={(e)=>setName(e.target.value)}/>
        <button onClick={AddUser}>Add</button>
       {UserList.map(({id,name,username})=>{
        return (
            <div key={id}>
        <h1>{username}</h1>      
           <h2>{name}</h2>
           <input type="text" placeholder='updatedname...' onChange={(e)=>setUpname(e.target.value)}/> 
           <button 
           onClick={()=>{dispatch(updateUser({id:id, name:upname}))}}>Update</button>
           <button onClick={()=>{dispatch(deleteUser({id:id}))}}>Delete</button>
        </div>
        )
       })}
    </div>
  )
}

export default Redx;