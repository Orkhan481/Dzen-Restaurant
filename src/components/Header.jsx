import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Link } from "react-router-dom";
const Header = () => {
  return (

      <header>

        <nav>
          <a href="#"><Link to="/" className='link'>Главная</Link></a>
          <a href="#"><Link to="/menu" className='link'>Меню</Link></a>
          <a href="#"><Link to="/booking" className='link'>Бронирование</Link></a>
        </nav>

        <a href="#"><Link to="/" className='link' id='logo'>Дзен</Link></a>

        <nav>

          <a href="#"><Link to="/about" className='link'>О нас</Link></a>
          <a href="#"><Link to="/contact" className='link'>Контакты</Link></a>
          <button className='btn yellow-btn sm-text'><Link to="/reserve" className='link'>Заказать </Link></button>
        </nav>
       <FaBars className='bar' />
      </header>
  
  )
}

export default Header