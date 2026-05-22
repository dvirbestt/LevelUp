import React, { use, useState } from 'react'
import { IoMail } from "react-icons/io5";
import { IoKeySharp } from "react-icons/io5";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [error, setError] = useState("")

  const submit = () => {

    if (email == "" || password=="") {
      setError("Please fill all fields")
    } else {
      let data = {
        email: email,
        password: password
      }
      console.log(data);
      
    }
  

  }


  return (
    <div>
      <h2>Log In</h2>
      <div className='form'>
        {error!= "" ?<div className='error-div'>{error}</div> : <div></div>}
        <div className='input-div'><IoMail color='#00F2FF' size={30} /><input type="email" name="email" placeholder="Email.." onChange={e => setEmail(e.target.value)} value={email} /></div>
        <div className='input-div'><IoKeySharp color='#00F2FF' size={30}/><input type="password" name="password" placeholder='Password..' value={password} onChange={(e => setPassword(e.target.value))} /></div>
        <div className='button' onClick={submit}>Log in </div>
      </div>
    </div>
  )
}
