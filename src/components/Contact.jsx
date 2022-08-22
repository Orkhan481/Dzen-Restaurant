import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='contact'>

        <div className="contact-banner" data-aos="flip-up" data-aos-duration="3000">
          <div className="banner-item">
            <h1 className='xlg-text'>Рабочее время</h1>
            <p className='md-text'>Ежедневно : 10.00 - 23.30</p>
          </div>

          <div className="banner-item">
            <h1 className='xlg-text'>Адрес</h1>
            <p className='md-text'>Dzen Restaurant <br />
              Санкт-Петербург, Песочная набережная, 18
            </p>
          </div>

          <div className="banner-item">
            <h1 className='xlg-text'>Контакты</h1>
            <p className='md-text'>Телефон  : +7 456 735 4625 </p>
            <p className='md-text'> Email  : DzenRestaurant@gmail.com </p>
            <p className='md-text'>Instagram  : @Dzenrestaurant </p>
          </div>

        </div>

      </section>

    </>
  )
}

export default Contact