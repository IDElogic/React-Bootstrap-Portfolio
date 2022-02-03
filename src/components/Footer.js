import React from 'react';

const Footer = () => {
  return (
    
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Don't be shy to say Hello! </p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+46 760492754</a>
            </div>
            <div className="d-flex">
              <p>privat.fi@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <p className="pt-3 text-center">
              Copyright &copy;
              {new Date().getFullYear()} |<span> by Me </span>| All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

  )
  
};

export default Footer;
