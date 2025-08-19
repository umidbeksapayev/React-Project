import React, { useState } from 'react'
import { Input } from '../ui'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
    <main class="text-center m-auto form-signin w-25">
      <form>
        <img class="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVttN46Nlm7amdeOiw5ziZUBx4gyW48QDZrw&s" alt="" width="72" height="57"/>
        <h1 class="h3 mb-3 fw-normal">Please register</h1>

        <Input label={'Username'} state={name} setState={setName}/>

        <Input label={'Email address'} state={email} setState={setEmail}/>

        <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

        <div class="checkbox mb-3">
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
      </form>
    </main>
    </div>
  )
}

export default Register
