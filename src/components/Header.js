import React from 'react';
import Typed from 'react-typed';

const Header = () => {
  return (
  <div className='header-wrapper'>
      <div className="main-info">
          <h1>development promotions</h1>
          <Typed
            className="typed-text"
            strings = {["WebDesign","WebDevelopment", "SocialMediaMarketing","WebshopManagement" ]}
            typeSpeed = {40}
            backSpeed = {60}
            loop
        />
        <a href='https://blibb.net/kontakt.html' className='btn-main-offer'>Contact me</a>
      </div>
  </div>
  )
}

export default Header;
