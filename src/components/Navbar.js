import React from 'react';
import logo  from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
<nav className ="navbar navbar-expand-lg bg-dark">
    <div className='container'>   
        <a className ="navbar-brand" href="https://blibb.net"><img className="logo" src={logo} alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
           <FontAwesomeIcon icon={faBars} style={ {color: "#8bd600"}}/>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home<span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#about">About me</a>    
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>    
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">How work</a>    
                </li> 
                <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>    
                </li> 
                <li className="nav-item">
                    <a className="nav-link" href="#footer">Contact</a>    
                </li> 
            </ul>
        </div>
    </div> 
    </nav>
  )
};

export default Navbar;
