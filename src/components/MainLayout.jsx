import React from "react";
// import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Home from "./Home";

const MainLayout = () => {
  return (
    <div className="container overflow-x-hidden">
      <Navbar /> 
      <Home/>   
    <About/>
    <Services/>
    <Contact/> 
      <Footer /> 
      
    </div>
  );
};

export default MainLayout;
