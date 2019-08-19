import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (

    <div className='container-fluid pb-md-3'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse  justify-content-end' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink exact to='/home' className='nav-link' activeClassName='active'>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink exact to='/topranking' className='nav-link' activeClassName='active'>Top Ranking</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
