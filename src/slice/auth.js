import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isLoading: false,
    loggedIn:false,
    error:null,
    user:null,
}

export const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers :{
        signUserStart:state=>{
            state.isLoading = true
        },
        signUserSuccess:(state, action)=>{
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload
        },
        signUserFailure:(state,action)=>{
            state.isLoading = false
            state.error = action.payload
        },

    }
})

export const {signUserFailure,signUserStart,signUserSuccess} = AuthSlice.actions
export default  AuthSlice.reducer