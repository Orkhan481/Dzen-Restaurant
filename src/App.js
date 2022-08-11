
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense } from 'react';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Booking from './components/Booking';
import Menu from './components/Menu';
import Contact from './components/Contact';
import About from './components/About';

function App() {
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
