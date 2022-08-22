import React from 'react'
import { FaBars, FaAlignLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useState, useRef } from 'react'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (

    <header>
<a href="#"><Link to="/" className='link' id='logo'>Дзен</Link></a>
      <nav className={isMobile ? "nav-links-mobile" : "nav-links" }
      onClick={()=> setIsMobile(false)}
      >
        <a href="#"><Link to="/" className='link'>Главная</Link></a>
        <a href="#"><Link to="/menu" className='link'>Меню</Link></a>
        <a href="#"><Link to="/booking" className='link'>Бронирование</Link></a>
        <a href="#"><Link to="/about" className='link'>О'нас</Link></a>
        <a href="#"><Link to="/contact" className='link'>Контакты</Link></a>
        <button className='btn yellow-btn sm-text'><Link to="/booking" className='link' >Заказать </Link></button>
      </nav>

      <button className="mobile-menu-icon"
      onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
      </button>

    </header>





  )
}

export default Header