import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>

            <section className='footer'>


                <a href="#"><Link to="/" className='link' id='logo'>Дзен</Link></a>

                <nav>
                    <a href="#"><Link to="/" className='link'>Главная</Link></a>
                    <a href="#"><Link to="/menu" className='link'>Меню</Link></a>
                    <a href="#"><Link to="/booking" className='link'>Бронирование</Link></a>
                    <a href="#"><Link to="/about" className='link'>О нас</Link></a>
                    <a href="#"><Link to="/contact" className='link'>Контакты</Link></a>
                </nav>

            </section>
            <div className="author orange-text sm-text">All Rights Reserved Ⓒ 2022 Orkhan </div>

        </>
    )
}

export default Footer