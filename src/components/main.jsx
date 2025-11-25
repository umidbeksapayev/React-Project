import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import { useNavigate } from "react-router-dom";
import {  getArticlesStart, getArticleSuccess } from "../slice/article";
import ArticleService from "../service/article";

const Main = () => {
  const dispatch = useDispatch()
  const {articles, isLoading} = useSelector( state => state.article )
  const {user, loggedIn} = useSelector( state => state.auth )
  const navigate = useNavigate()

  const getArticles = async ()=>{
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticleSuccess(response.articles))
      console.log(response);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const deleteArticle = async slug =>{
    try {
      await ArticleService.deleteArticle(slug)
      getArticles()
    } catch (error) {
        console.log(error);
        
    }
  }



  useEffect(()=>{
    getArticles()
  },[])

  return (
    <div className="container">
      {isLoading && <Loader/>}
      <div className="album py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles.map(item =>{
           return <div className="col" key={item.id}>
              <div className="card h-100 shadow-sm">
                
                <svg
                  aria-label="Placeholder: Thumbnail"
                  className="bd-placeholder-img card-img-top"
                  height="225"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                </svg>
                <div className="card-body">
                  
                  <p className="card-text m-0 fw-bold">
                    {item.title}
                  </p>
                  <p className="card-text m-0">
                    {item.description }
                  </p>
                </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    
                    <div className="btn-group">
                      
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={()=>{navigate(`article/${item.slug}`)}}
                      >
                        View
                      </button>
                    
                        {loggedIn && user.username === item.author.username && (
                          <>
                            <button  type="button"
                        className="btn btn-sm btn-outline-secondary">
                              Edit
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-danger"
                              onClick={()=>deleteArticle(item.slug)}
                            >
                              Delete
                            </button>
                          </>
                        )}
                    </div>
                    <small className="text-body-secondary fw-bold text-capitalize">{item.author.username}</small>
                  </div>
              </div>
            </div>
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Main;
