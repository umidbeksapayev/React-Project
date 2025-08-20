import React from 'react'
import { useState } from 'react'
import { Input } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserStart } from '../slice/auth'    

const Login = () => {
   const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state=>state.auth)
    console.log(isLoading);

    const loginHandler= e =>{
      e.preventDefault()
      dispatch(loginUserStart())

    }
    
  return (
    <div>
    <main className="text-center m-auto form-signin w-25">
      <form>
        <img className="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVttN46Nlm7amdeOiw5ziZUBx4gyW48QDZrw&s" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">{isLoading ? 'Waiting ...':'Pleace Login'}</h1>
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
