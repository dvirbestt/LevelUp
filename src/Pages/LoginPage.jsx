import React, { useState } from 'react'
import SignIn from '../Components/SignIn'
import SignUp from '../Components/SignUp'

export default function LoginPage() {

   const [pageSelect,setPageSelect] = useState(<SignIn/>) 
   const [page,setPage] = useState("signIn") 
  return (
    <div>
        {pageSelect}
        <div className='switch'>
        {page == "signIn" ? <div onClick={()=>{setPageSelect(<SignUp/>); setPage("signUp") }}>Not Registered yet? Press here</div> :
         <div onClick={()=>{setPageSelect(<SignIn/>); setPage("signIn")}}>Already Registered ? Press here</div>}
        </div>
    </div>
  )
}
