import React from 'react';
import { Link } from 'react-router-dom';
import './components.css';

const Header = (props) => {
    return (
      <div className='header-container'>
        <div className='logo-text'>FoodPursuit</div>
        <img className='logo' src='https://foodtruck-tracker-3-ui.netlify.app/resources/FP-logo-circle.png' alt='logo of person eating' />
        <nav>
          <a href="https://foodtruck-tracker-3-ui.netlify.app/index.html">Home</a>
          <a href="https://foodtruck-tracker-3-ui.netlify.app/about.html">About</a>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </div>
    );
};

export default Header;  