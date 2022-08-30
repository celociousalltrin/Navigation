import React from 'react';
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { useEffect,useState } from 'react';
import { GetData,adduser,updateUser,DeleteUser } from '../feature/UserSlice';


const Red = () => {
const [name,setName] = useState("")
const [username,setUsername] = useState("")
const [update,setUpdate] = useState("")

const dispatch = useDispatch()
const UserList = useSelector((state)=>state.userInfo.value)


useEffect(()=>{
   dispatch(GetData())
},[dispatch])

const AddUser = (()=>{
    const OBJ = {
        id:UserList[UserList.length-1].id+1,
        name:name,
        username:username,
    }
    dispatch(adduser(OBJ))
})
  return (
    <div>
        <input type="text" placeholder='name...' 
        onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='username..'
         onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={AddUser}>Add</button>
        {UserList.map((item)=>{
            return(
                <div key={item.id}>
                    <h1>{item.username}</h1>
                    <h3>{item.name}</h3>
                    <input type="text" placeholder="update.."
                    onChange={(e)=>setUpdate(e.target.value)}/>
                    <button onClick={()=>
                    dispatch(updateUser({id:item.id,username:update}))
                    }>Update</button>
                    <button onClick={()=>{
                        dispatch(DeleteUser({id:item.id}))
                    }}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default Red;