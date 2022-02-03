import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Footer from './components/Footer';

import { useState, useEffect } from 'react';



function App() {

  const theTime = 30;
  const [second, setSecond] = useState(theTime);

    useEffect(() => {
      const timer = setInterval(() => {
        if(second >= 1 ){
        setSecond(second - 1);
        } 
      }, 1000);
      return () => {
        clearInterval(timer);
      }
  
    });
  return (
    <>
      <Navbar/>
      <Header/>
        <div className="btn-timer">
          <div className="loading-bar"></div>
        {second !== 0  ? `Loading next in ${second}s` : "Please, wait..." }  
        </div>
      
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Services/>
      <Footer/>
      
    <div className="App" >

    </div>
  </>
  );
}

export default App;
