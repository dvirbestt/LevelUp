import React, { use, useState } from 'react'
import "../Styles/form.css"
import { IoPerson } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLanguage } from "react-icons/io5";
import { IoKeySharp } from "react-icons/io5";

export default function SignUp() {
    const [userName, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [passConf, setPassConf] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');

    const submit = () => {
        if (userName == "" || fullName == "" || password == "" || passConf == "" || email == "") {
            setError("Please fill all fields");
        } else if (password != passConf) {
            setError("Passwords do not match");
        } else {
            let data = {
                userName: userName,
                fullName: fullName,
                password: password,
                passConf: passConf,
                email: email
            }
            console.log(data)
        }
    }

    return (
        <div>

            <h2>Sign up</h2>
            <div className='form'>
                {error!= "" ?<div className='error-div'>{error}</div> : <div></div>}
                <div className='input-div'><IoPerson color='#00F2FF' size={30}/><input type="text" placeholder="Username.." value={userName} onChange={e => setUsername(e.target.value)} /></div>
                <div className='input-div'><IoMail color='#00F2FF' size={30} /><input type="email" placeholder="Email.." value={email} onChange={e => setEmail(e.target.value)} /></div>
                <div className='input-div'><IoLanguage color='#00F2FF' size={30}/><input type="text" placeholder='Full name..' value={fullName} onChange={e => setFullName(e.target.value)} /></div>
                <div className='input-div'><IoKeySharp color='#00F2FF' size={30}/><input type="password" placeholder='Password..' value={password} onChange={e => setPassword(e.target.value)} /></div>
                <div className='input-div'><IoKeySharp color='#00F2FF' size={30}/><input type="password" placeholder='Confirm Password..' value={passConf} onChange={e => setPassConf(e.target.value)} /></div>
                <div className='button' onClick={submit}>Sign up</div>
            </div>
        </div>
    )
}
