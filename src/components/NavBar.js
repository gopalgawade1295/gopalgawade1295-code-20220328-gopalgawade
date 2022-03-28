import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  const [click, setClick] = useState(false)

  function Click() {
    setClick(!click)
  }

  return (
    <div>
      <nav className='NavBar'>
        <Link to='/'>
          <h1 className='YourLogo'>Your Logo</h1>
        </Link>
        <div className='NavIcon' onClick={Click}>
          {click ? <div className='Bars'><i className="fa-solid fa-bars"></i></div> : <div className='CloseIcon'><i className="fa-solid fa-xmark"></i></div>}
        </div>
        <ul className={click ? "NavMenus close" : "NavMenus"}>
          <Link to='/explore'>
            <li className='NavMenu'>Explore</li>
          </Link>
          <Link to='/about'>
            <li className='NavMenu'>About Us</li>
          </Link>
          <Link to='/cities'>
            <li className='NavMenu'>Cities <i className="fa-solid fa-angle-down"></i></li>
          </Link>
          <Link to='/call'>
            <li className='NavMenu'><div className='Call'>Call</div></li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
