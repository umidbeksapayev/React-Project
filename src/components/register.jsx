import React, { useState } from 'react'
import { Input } from '../ui'
import { useDispatch, useSelector } from 'react-redux'
import {signUserFailure, signUserStart, signUserSuccess } from '../slice/auth' 
import AuthService from '../service/auth'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

   const dispatch = useDispatch()
    const {isLoading} = useSelector(state=>state.auth)


    const registerHandler= async (e) =>{
      const user = {username:name, email, password}
      e.preventDefault()
      dispatch(signUserStart())
      try {
        const response = await AuthService.userRegister(user) 
        dispatch(signUserSuccess(response.user))
      } catch (error) {
        dispatch(signUserFailure(error.response.data.errors))
      }

    }


  return (
    <div>
    <main className="text-center m-auto form-signin w-25">
      <form>
        <img className="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVttN46Nlm7amdeOiw5ziZUBx4gyW48QDZrw&s" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <Input label={'Username'} state={name} setState={setName}/>

        <Input label={'Email address'} state={email} setState={setEmail}/>

        <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

        <div className="checkbox mb-3">
        </div>
        <button className="w-100 btn btn-lg btn-primary" disabled={isLoading} onClick={registerHandler} type="submit">{isLoading ? 'loading ..': 'Register'}</button>
      </form>
    </main>
    </div>
  )
}

export default Register
