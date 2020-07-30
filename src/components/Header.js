import React from 'react'
import './components.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='logo-text'>FoodPursuit</div>
      <img className='logo' src='https://foodtruck-tracker-3-ui.netlify.app/resources/FP-logo-circle.png' alt='logo of person eating' />
      <nav>
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
      </nav>
    </div>
  )
}
export default Header  