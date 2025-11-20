  import React, { useEffect } from 'react'
  import { useState } from 'react'
  import { Input } from '../ui'
  import { useDispatch, useSelector } from 'react-redux'
  import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth'    
  import AuthService from '../service/auth'
  import ValidationError from './validation-error'
  import { useNavigate } from 'react-router-dom'

  const Login = () => {
    const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const dispatch = useDispatch()
      const {isLoading,loggedIn} = useSelector(state=>state.auth)
      const navigate = useNavigate()

      const loginHandler = async (e) =>{
        const user = {email, password}
        e.preventDefault()
        dispatch(signUserStart())
        try {
          const response = await AuthService.userLogin(user) 
          dispatch(signUserSuccess(response.user))
          navigate('/')
        } catch (error) {
          dispatch(signUserFailure(error.response.data.errors))
        }

      }
      useEffect(()=>{
            if(loggedIn){
              navigate('/')
            }
          },[loggedIn])
      
    return (
      <div>
      <main className="text-center m-auto form-signin w-25">
        <form>
          <img className="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVttN46Nlm7amdeOiw5ziZUBx4gyW48QDZrw&s" alt="" width="72" height="57"/>
          <h1 className="h3 mb-3 fw-normal">{isLoading ? 'Waiting ...':'Pleace Login'}</h1>
          <ValidationError/>
          <Input label={'Email address'} state={email} setState={setEmail}/>

          <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

          <div className="checkbox mb-3">
          </div>
          <button className="w-100 btn btn-lg btn-primary" disabled={isLoading} onClick={loginHandler} type="submit">{isLoading ? 'loading ..': 'Login'}</button>
        </form>
      </main>
      </div>
    )
  }

  export default Login
