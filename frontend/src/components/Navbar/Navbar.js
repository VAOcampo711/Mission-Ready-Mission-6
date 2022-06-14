import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="navbar-container">
            <div className="navbar-selections">
                <ul className='navbar-selection-list'>
                    <li className='navbar-list'>Find a Property</li>
                    <li className='navbar-list'>Our Services </li>
                    <li className='navbar-list'>Our Teams</li>
                    <li className='navbar-list'>FAQ’s</li>
                    <li className='navbar-list'>Contact Us</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar