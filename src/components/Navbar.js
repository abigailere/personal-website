import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import {Button} from './Button'
import Dropdown from './Dropdown'


const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click) //sets to the opposite of click, like toggle
  return (
    <div className = "navbar">
        <div className = "links">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects 
            </Link>
            <Link to="/experience">Experience</Link>
        </div> 
        
        
    </div>
  )
}

export default Navbar

/*<div className='menu-icon' onClick={handleCLick}> 
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div> 
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
          
          </li>
        </ul>*/