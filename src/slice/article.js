import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles:[],
    articleDetail:null,
    error: null,
}

export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers:{
        getArticlesStart: state =>{
            state.isLoading = true
        },
        getArticleSuccess: (state, action) =>{
            state.isLoading = false
            state.articles = action.payload
        },
        getArticleFailure: (state, action)=>{
            state.error = action.payload
        },
        getArticleDetailSuccess:(state, action)=>{
            state.isLoading = false
            state.articleDetail = action.payload
        },
        getArticleDetailFailure:state=>{
            state.isLoading = false
        },
        getArticleDetailStart:state=>{
            state.isLoading = true
        }
    }
})

export const {getArticlesStart, getArticleSuccess, getArticleFailure, getArticleDetailFailure,getArticleDetailSuccess,getArticleDetailStart} = articleSlice.actions
export default articleSlice.reducer