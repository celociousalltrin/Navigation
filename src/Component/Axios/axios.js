import React from 'react';
import CustomAPI from "../Axios/baseAPI";
import { useEffect,useState } from 'react';

const Name = () => {
    const [data,setData] = useState([])
    const [name,setName] = useState("")
    const [username,setUsername] = useState("")
    useEffect(()=>{
CustomAPI.get("/Profile")
.then((res)=>setData(res.data))
.catch((err)=>console.log(err))
    },[])

    const Adduser = (()=>{
        const OBJ = {
            id:data[data.length-1].id+1,
            username:username,
            name:name,
        }
        CustomAPI.post("/Profile",OBJ)
        .then((res)=>console.log(res.data))
        .catch((err)=>console.log(err))
    })

  return (
    <div>
        <form>
        <input type="text" placeholder="username.." 
        onChange={(e)=>setUsername(e.target.value)}/>
        <input type="text" placeholder="name.." 
         onChange={(e)=>setName(e.target.value)}/>
        <button onClick={Adduser}>Add</button>
        {data.map((item)=>{
            return(
                <div key={item.id}>
                    <h1>{item.username}</h1>
                    <h2>{item.name}</h2>
                </div>
            )
        })}
                </form>
    </div>
  )
}

export default Name;