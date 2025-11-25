import React from 'react'
import {Input, TextArea} from '../ui'
import { useSelector } from 'react-redux'
const ArticleForm = props => {
    const {title,setTitle, body, setBody, description, setDescription, formSubmit} = props
    const {isLoading} = useSelector(state => state.article)
  return (
    <div>
       <form onSubmit={formSubmit}>
                <Input label={"Title"} state={title} setState={setTitle}/>
                <TextArea label={"Description"} state={description} setState={setDescription} />
                <TextArea label={"Body"} state={body} setState={setBody} height='300px'/>
                <button className=" mt-2 w-100 btn btn-lg btn-primary" disabled={isLoading} type="submit">{isLoading? "Loading..": 'Create'}</button>
            </form>
    </div>
  )
}

export default ArticleForm
