import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

// React Lazy

const Booking = React.lazy(()=>import("./components/Booking"))
const Menu = React.lazy(()=>import("./components/Menu"))
const Contact = React.lazy(()=>import("./components/Contact"))
const About = React.lazy(()=>import("./components/About"))

function App() {
  const loader = document.querySelector(".loader");
  window.addEventListener("load",function(){
    setTimeout(function(){
        loader.style.display = 'none';
    },2000)
})
  return (
    <div className="App">

     <BrowserRouter>
    <Suspense fallback={<div className='loader'></div>}>
    <Header />
    <Routes>
       
       
       <Route path="/" element={<Home/>} />
       <Route path="/menu" element={<Menu/>} />
       <Route path="/booking" element={<Booking/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/contact" element={<Contact/>} />

      
    </Routes>
    <Footer/>
    </Suspense>
    </BrowserRouter>
    </div>
  );
}

export default App;
