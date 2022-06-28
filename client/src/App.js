import React from 'react';
import About from './container/About/About';
import Header from './container/Header/Header';
import Skills from './container/Skills/Skills';
import Work from './container/Work/Work';
import Testimonial from './container/Testimonial/Testimonial';
import Footer from './container/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

const App=()=> {
  return (
      <div className='app'>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonial/>
        <Footer/>
      </div>
  
  );
}

export default App;
