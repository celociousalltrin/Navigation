import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const GetData = createAsyncThunk("user/GetData",async()=>{
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.data)
    .catch((err)=>console.log(err))
})

export const UserSlice = createSlice({
    name:"user",
    initialState:{value:[]},

    reducers:{
        addUser:(state,action)=>{
           state.value.push(action.payload)
        },
        updateUser:(state,action)=>{
            state.value.map((item)=>{
                if(item.id === action.payload.id){
                    item.name = action.payload.name
                }
            })
        },
        deleteUser:(state,action)=>{
            state.value = state.value.filter((item)=>{
                return item.id !== action.payload.id;
            })
        },
    },
    extraReducers:{
        [GetData.pending]:()=>{
            console.log(`Pending`)
        },
        [GetData.fulfilled]:(state,action)=>{
            return {...state, value:action.payload}
        },
        [GetData.rejected]:()=>{
            console.log(`rejected`)
        }
    }
})

export default UserSlice.reducer;
export const {addUser, updateUser, deleteUser} = UserSlice.actions;