import React from 'react';
import About from './components/About';
import  Brands  from './components/Brands';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackTopBtn from './components/BackToTopBtn';


const App = () => {

 
  return <div>
    
    <Header/>
    <Hero/>
    <Brands/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Services/>
    <Contact/>
    <Footer/>
    <BackTopBtn/>
    <div style={{height:'000px'}}>

    </div>


  </div>;
};

export default App;
