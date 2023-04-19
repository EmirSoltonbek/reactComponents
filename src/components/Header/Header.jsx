import React from 'react'
import '../Style.css'
import Logo from '../Images/logo.jpg'
const Header = () => {
  return (
    <div>
        <header>
            <div className='container'>
              <ul className='header-ul'>
                <a href="#"><img src={Logo} alt="" width={135}/></a>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Contacts</a></li>
              </ul>
            </div>
        </header>
        <hr/>
    </div>
  )
}

export default Header