import React from 'react'
import "../Styles/upperbar.css"
import { IoEllipsisVertical } from "react-icons/io5";
import logo from "../assets/levelup-logo-removebg-preview.png"

export default function UpperBar() {

  let level = 10;

  return (
    <div className='upperbar'>
        <div className='logo'><img src={logo}/></div>
        <div className='buttons'>
            <div className='user'><div>Username</div> <div>{level}</div></div>
            <div><IoEllipsisVertical size={20}/></div>
        </div>
    </div>
  )
}
