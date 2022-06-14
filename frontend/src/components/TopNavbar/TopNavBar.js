import React from 'react'
import Brand from '../../images/image 4.png'
import './TopNavBar.css'


const TopNavBar = () => {

  return (
    <> 
        <div className="top-container-brand">
          <div className="top-nav-brand">
              <img className='top-navbar-brand' src={  
                  Brand
              } alt="brand" width={429}  height={153}/>
          </div>
          <div className='nav-button-container'>
            <button className='nav-button'>Sign up</button>
            <button className='nav-button'>Login in</button>
          </div>
        </div>
        
    </>
  )
}

export default TopNavBar