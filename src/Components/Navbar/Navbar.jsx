import React from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu_icon.png'
import logo from '../../assets/logo.jpg'
import search from '../../assets/search.png'
import upload from '../../assets/upload.png'
import notification from '../../assets/notification.png'
import profile from '../../assets/profile.png'
import more_icon from '../../assets/more_icon.png'
import {Link} from 'react-router-dom'




import home from "../../assets/home.png"
const Navbar = ({setSidebar}) => {

  return (
   <nav className='flex-div'>




        <div className='nav-left flex-div'>
            {/* <h1>nav</h1> */}
            <img className='menu-icon'  onClick={() => setSidebar(prev =>!prev)} src={menu_icon} alt="menu icons"/>
            <Link to='/'>
            <img className='logo' src={logo} alt="youtube logo"/>
            </Link>
               </div>
        <div className='nav-middle flex-div'>
            <div className='search-box flex-div'>
            <input type='text' placeholder='Search'/>
            <img src={search} alt="Search Icon"/>
      
            </div>
            </div>
        <div className='nav-right flex-div'>
            <img src={upload} alt="" />
            <img src={more_icon} alt="more_icon" />
            <img src={notification} alt="" />
            <img src={profile} alt=""  className='user_icon'/>
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
   </nav>
  )
}

export default Navbar