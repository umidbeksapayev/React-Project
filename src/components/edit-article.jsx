import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess, postArticleFailure, postArticleSuccess, psotArticleStart } from '../slice/article'
import ArticleService from '../service/article'
import { useNavigate, useParams } from 'react-router-dom'
import ArticleForm from './article-form'

const EditArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {slug} = useParams()
    useEffect(()=>{
        const getArticleDetail = async()=>{
            dispatch(getArticleDetailStart)
            try {
                const response = await ArticleService.getArticleDetail(slug)
                setTitle(response.article.title)
                setDescription(response.article.description)
                setBody(response.article.body)
                dispatch(getArticleDetailSuccess(response.article))
                
            } catch (error) {
                dispatch(getArticleDetailFailure())
            }
        }
        getArticleDetail()
    }, [slug])
    
    const formSubmit = async (e) =>{
        e.preventDefault()
        const article = {title, description, body}
        dispatch(psotArticleStart())
        try {
            await ArticleService.editArticle(slug, article)
            dispatch(postArticleSuccess())
            navigate('/')
        } catch (error) {
            console.log(error);  
            dispatch(postArticleFailure())  
        }
    }

    const formProps = {title,setTitle, body, setBody, description,setDescription, formSubmit} 
  return (
    <div className='text-center'>
      <h1>edit article </h1>
      <div className='w-75 mx-auto'>
        <ArticleForm {...formProps} />
      </div>
    </div>
  )
}

export default EditArticle
