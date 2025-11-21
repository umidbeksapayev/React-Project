import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../slice/auth";
import {articleSlice} from "../slice/article"
export default configureStore({
    reducer:{
        auth: AuthSlice.reducer,
        article: articleSlice.reducer
    },
    devTools:process.env.NODE_ENV !== 'production'
})