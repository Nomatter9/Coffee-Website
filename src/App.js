import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Layout from "./components/Layout";




function App() {

  return (
    <>

 <div className="container  overflow-x-hidden">
 <Router>
      <Routes>
        {/* Layout wraps all pages */}
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} /> {/* Default homepage */}
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
    <Home/>
  </div>
  

   <About/>
   <Services/> 
  <Contact/>
  <Footer/>
   
   
   
 
</>
   
  );
}

export default App;
