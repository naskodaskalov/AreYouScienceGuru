import React from 'react'
import headerImage from '../images/banner.jpg'

const Header = () => (
  <div className='jumbotron jumbotron-fluid header'>
    <img src={headerImage} className='header-image' alt='Are you science guru?' />
    <h3 className='header-title'>Are you science guru? Find out!</h3>
  </div>
)

export default Header
