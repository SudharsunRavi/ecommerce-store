import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        isSignIn:false,
    },
    reducers:{
        addUser:(state, action)=>{
            state.isSignIn = true;
            state=action.payload;
        },
        removeUser:(state)=>{
            state.isSignIn = false;
            state=null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;