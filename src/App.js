import 'bootstrap/dist/css/bootstrap.min.css';
//import Particles from 'react-particles-js';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <AboutMe/>
      <Skills/>
      <Experience/>
      <Services/>
      <Footer/>
      
    <div>...</div>
    </>
  );
}

export default App;
