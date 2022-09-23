import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const GetTodo = createAsyncThunk("user/GetTodo", async()=>{
return axios.get("https://jsonplaceholder.typicode.com/posts")
   .then((res)=>res.data)
   .catch((err)=>console.log(err))
})
export const todoSlice = createSlice({
    name:"user",
    initialState:{value:[]},

    rediucers:{
        addTodo:(state,action)=>{
            //logic
        }
    },

    extraReducers:{
        [GetTodo.pending]:()=>{
            console.log(`Pending`)
        },
        [GetTodo.fulfilled]:(state,action)=>{
            return {...state, value:action.payload}
        },
        [GetTodo.rejected]:()=>{
            console.log(`rejected`)
        }
    }

})

export default todoSlice.reducer;