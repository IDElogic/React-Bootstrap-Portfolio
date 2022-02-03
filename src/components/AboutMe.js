import React from 'react';
import author from '../me.jpg'

const AboutMe = () => {
  return (
    <div id='about' className='container py-5'> 
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>
                <div className='photo-wrap mb-5'>
                    <img className='profile-img' src={author} alt='author...'/>
                </div>                    
            </div>    
            <div className='col-lg-6 col-xm-12'>
                <h1 className='about-heading'> about me</h1>
                <p>
                Web developer with 1 year of experience in designing and developing user interfaces and project management within React, Github and Trello.
                An Experience in managing a team of three to conduct an e-commerce website for final project at College.
                Proven ability in optimizing web functionalities that improve data process and workflow efficiencies.
                Ambitious problem solver with a passion for online businesses, and who would like to join a team of like-minded developers.
                Experience in creating both logical and innovative solutions to complex web problems. 
                Accomplished individual with a competent background in HTML, CSS, React , Material UI and GitHub.
                </p>    
            </div> 
        </div> 
    </div>
  )
  
};

export default AboutMe;
