import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import BookingForm from './BookingForm'
const Home = () => {
    return (
        <> <div className='home'>
            <div className='banner'>

                <div className='banner-area'>

                    <h1>Дзен</h1>
                    <p className='md-text'>Добро пожаловать в ресторан <br /> азиатской кухни</p>
                    <button className='btn yellow-btn'>Заказать столик</button>

                </div>


            </div>
         </div>
            <section className='ourstory'>

                <div className='images-area'>
                    <div className='left-side'>
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659039533/Dzen/1_ez3i3x.png" alt="Story Images" />
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659039533/Dzen/2_gfw4sa.png" alt="Story Images" />
                    </div>
                    <div className="right-side">
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659039534/Dzen/3_uroy9e.png" alt="Story Images" />
                    </div>
                </div>

                <div className="content">
                    <h1 className='xlg-text'>История ресторана</h1>
                    <p className='sm-text'>Добро пожаловать в ресторан Дзен. Этот ресторан был основан в 2012 году с концепцией изысканной азиатской кухни, приготовленной профессиональным шеф-поваром.</p>
                    <p className='sm-text'>Наш ресторан предлагает разнообразные азиатские блюда, включая китайскую кухню, японскую кухню, корейскую кухню.</p>
                    <div className="more">
                        <p className='sm-text orange-text'>Подробнее</p>
                        <FaArrowRight classname='orange-text' id='right' />
                    </div>
                </div>

            </section>

            {/* OUR MENU */}
            <section className='ourmenu'>

                <div className="cards">
                    <h2>Наше <br /> меню</h2>
                    {/* Card-1 */}
                    <div className="card">
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659041551/Dzen/card-1_tkp7zw.png" alt="Card-1" />
                        <h3>Китайская кухня</h3>
                    </div>
                    {/* Card-2 */}
                    <div className="card">
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659041554/Dzen/card-2_wmglh3.png" alt="Card-2" />
                        <h3>Японская кухня</h3>
                    </div>
                    {/* Card-3 */}
                    <div className="card">
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659041556/Dzen/card-3_n344hq.png" alt="Card-3" />
                        <h3>Корейская кухня</h3>
                    </div>

                </div>

            </section>

            {/* PLACE */}
            <section className='place'>

                <div className="place-content">
                    <h1 className='xlg-text'>Прекрасное место... <br /> Прекрасная еда...</h1>
                    <p>У нас есть ресторан с 3 разными концепциями. Первый открытаый зал с видом на набережную. Второй зал в классическом стиле. Третий зал оформлен опираясь на современную концепцию.</p>
                    <p>Забронируйте место сейчас и насладитесь проведенным у нас временем!</p>
                    <button className='btn yellow-btn'>Заказать столик</button>
                </div>

                <div className="images-area">
                    <div className="panel-area-1">
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659043058/Dzen/panel-1_ccw4hg.png" alt="Panel-1" className='panel panel-1' />
                    </div>

                    <div className="panel-area-2">
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659043052/Dzen/panel-2_yxfq6j.png" alt="Panel-2" className='panel panel-2' />
                    </div>

                    <div className="panel-area-3">
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659043057/Dzen/panel-3_jvjcrm.png" alt="Panel-3" className='panel panel-3' />
                    </div>



                </div>

            </section>

            {/* OUR PHOTO */}
            <section className="our-photo">

                <div className="titles">
                    <h1 className="xlg-text">Фотографии</h1>
                    <div className="more">
                        <p className='sm-text orange-text'>Посмотреть</p>
                        <FaArrowRight className='orange-text' id='right' />
                    </div>
                </div>

                <div className="cards">

                    <div className="card">
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659099947/Dzen/our-photo-card-1_oxxedn.png" alt="Image" />
                    </div>

                    <div className="card half-card">
                        <img className='half-img' src="https://res.cloudinary.com/dreqpija0/image/upload/v1659099946/Dzen/our-photo-card-1.1_obgtwc.png" alt="Image" />
                        <img className='half-img' src="https://res.cloudinary.com/dreqpija0/image/upload/v1659099946/Dzen/our-photo-card-1.2_jgz06u.png" alt="Image" />
                    </div>

                    <div className="card">
                        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659099949/Dzen/our-photo-card-3_bpk1ae.png" alt="Image" />
                    </div>

                    <div className="card half-card">
                        <img className='half-img ' src="https://res.cloudinary.com/dreqpija0/image/upload/v1659099946/Dzen/our-photo-card-4.1_ljzn82.png" alt="Image" />
                        <img className='half-img' src="https://res.cloudinary.com/dreqpija0/image/upload/v1659099945/Dzen/our-photo-card-4.2_xwpkyp.png" alt="Image" />
                    </div>

                </div>

            </section>
{/* BOOKING FORM */}
            <BookingForm />

        </>
    )
}

export default Home