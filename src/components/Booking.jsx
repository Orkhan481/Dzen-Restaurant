import React from 'react'
import BookingForm from './BookingForm'

const Booking = () => {
  return (
    <div className='booking-page'>
    <section className='booking'>
     <div className="booking-banner xlg-text" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
     Бронирование
     </div>
    </section>

    <section className='booking-cards'>

        <div className="card" data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">

            <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659124411/Dzen/bk-card-1_zouo9k.png" alt="" id="booking-img"/>
            
            <div className="card-content">
            <h2>Индивидуальный</h2>
            <p>Ресторан Дзен подходит для частных ужинов, романтических ужинов, семейных посиделок и встреч.</p>
            <p>Сделайте свой ужин более особенным с нашим специальным ресторанным меню.</p>
            </div>

        </div>

        <div className="card" data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">

        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659124415/Dzen/bk-card-2_pcuczs.png" alt="" id="booking-img"/>

        <div className="card-content">
        <h2>Корпоративный</h2>
            <p>Наш ресторан можно использовать для корпоративных встреч с оформлением на заказ.</p>
            <p>Сделайте ваши встречи более особенными с нашим специальным ресторанным меню.</p>
        </div>

        </div>

        <div className="card" data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">

        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659124417/Dzen/bk-card-3_hgnjtl.png" alt="" id="booking-img"/>

        <div className="card-content">
        <h2>Праздничный</h2>
            <p>Ресторан имеет большую площадь которая без труда вмещает до 150 человек.</p>
            <p>Наш ресторан подойдет для общественных мероприятий, свадеб и других мероприятий.</p>
        </div>

        </div>


    </section>

<BookingForm />
    </div>
  )
}

export default Booking