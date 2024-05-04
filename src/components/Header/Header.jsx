import React from 'react'
import logo from '../../assets/logo.webp'

const Header = () => {
  return (
    <div className="navbar">
    <div className="nav-items">
      <section>
        {/*logo*/}
        <div class="nav-logo">
          <img src={logo} alt="loading" />
          <ul className="nav-links">
          <a href="#">Platform</a>
          <a href="#">Plans</a>
          <a href="#">Enterprise</a>
          <a href="#">Resources</a>
          <a href="#">Education</a>
        </ul>
        </div>
      </section>
      <section className="nav-links-container">
        {" "}
        {/* Nav links */}
       
      </section>
      <section className="nav-button">
        <a href="#">Contact Us</a>
        <a href="#">Log In</a>
        <button>Sign up</button>
      </section>
    </div>
  </div>
  )
}

export default Header
