// import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/Form";
import Contact from "./components/Contacts"; 
import './App.css'
function App() {

  return (
    <>
      <div>
        <div className="head">
          <Link to="/home">
            <h1>Kalvium</h1>
          </Link>
          <div className="right">
           
            <Link to="/contact">
              <h1>Contact</h1>
            </Link>
            <Link to="/form">
              <h1>Registration</h1>
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;