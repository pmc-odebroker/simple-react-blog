import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.jpg'
// import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'

function Header() {
  return (
    <nav>
        <div className="container nav__container">
            <Link to={'/'} className="nav__logo">
                <img className="img" src={Logo} alt="Nav logo"></img>
            </Link>
            <ul className="nav__menu">
                <li><Link to={ '/profile' }>User Name</Link></li>
                <li><Link to={ '/create' }>Create Post</Link></li>
                <li><Link to={ '/authors' }>Author</Link></li>
                <li><Link to={ '/logout' }>Logout</Link></li>
                <button className="nav__toggle-btn">
                    <AiOutlineClose />
                </button>
            </ul>
        </div>
    </nav>
  )
}

export default Header