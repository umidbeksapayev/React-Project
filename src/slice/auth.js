import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoading: false,
    loggedIn:false,
    error:null,
    user:null,
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers :{
        loginUserStart:state=>{
            state.isLoading = true
        },
        loginUserSuccess:state=>{
            // state.isLoading = false
            // state.loggedIn = true
        },
        loginUserFailure:state=>{},

        registerUserStart:state=>{
            state.isLoading = true
        },
        registerUserSuccess:state=>{
            state.isLoading = false
            state.loggedIn = true
        },
        registerUserFailure:state=>{
            state.isLoading = false
            state.error = "error"
        },

    }
})

export const {loginUserStart, registerUserStart, registerUserFailure, registerUserSuccess} = authSlice.actions
export default  authSlice.reducer