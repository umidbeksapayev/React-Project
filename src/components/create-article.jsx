import { useState } from 'react'
import ArticleForm from './article-form'
import ArticleService from '../service/article'
import { useDispatch } from 'react-redux'
import { postArticleFailure, postArticleSuccess, psotArticleStart } from '../slice/article'
import { useNavigate } from 'react-router-dom'
const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const formSubmit = async (e) =>{
        e.preventDefault()
        const article = {title, description, body}
        dispatch(psotArticleStart())
        try {
            await ArticleService.postArticle(article)
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
     <h1 className="fs-2">Create Article</h1>
        <div className="w-75 mx-auto">
           <ArticleForm {...formProps} />
        </div>
    </div>
  )
}

export default CreateArticle
