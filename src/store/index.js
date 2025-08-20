import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../slice/auth";

export default configureStore({
    reducer:{
        auth: AuthSlice.reducer,
    },
    devTools:process.env.NODE_ENV !== 'production'
})