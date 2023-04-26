import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBriefcase} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

const Navbar = () => {
  return (
    <nav>
      <a href="#"
      className='active'><AiOutlineHome/></a>
      <a href="#About"><AiOutlineUser/></a>
      <a href="#Experience"><BsBriefcase/></a>
      <a href="#Services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageDetail/></a>
    </nav>
  )
}

export default Navbar
