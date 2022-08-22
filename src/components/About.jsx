import React from 'react';

import ourTeam from '../ourTeam.json';
import slider from '../slider.json'

import 'swiper/css';
import "swiper/css/bundle";
import "swiper/css/grid";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
  return (
    <>

    <section className="about">

      <div className="about-banner" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <h1 className='xlg-text'>Коллектив и история</h1>
      </div>

    </section>

    <section className='about-content'>

      <div className="left-side" data-aos="fade-right"  data-aos-easing="linear"
     data-aos-duration="1000">

        <h1 className='lg-text'>История <br /> ресторана</h1>
        <p className='sm-text'>Добро пожаловать в ресторан 48 Cuisine. Этот ресторан был основан в 2012 году с концепцией изысканной азиатской кухни, приготовленной профессиональным шеф-поваром.</p>
        <p className='sm-text'>Наш ресторан предлагает разнообразные азиатские блюда, включая китайскую кухню, японскую кухню, корейскую кухню.</p>
        <p className='sm-text'>У нас есть 3 зала оформленных. первый зал с видом на набережную, второй - классический концептуальный зал с красивой деревенской атмосферой, третий зал оформлен в современном стиле.</p>

      </div>

      <div className="right-side" data-aos="fade-left"  data-aos-easing="linear"
     data-aos-duration="1000">
        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659039534/Dzen/3_uroy9e.png" alt="About Image" />
      </div>

    </section>

{/* GALLERY */}
<div className="galery-titles">
<h1 className='xlg-text'>Галерея</h1>
</div>

    {/* SWIPPERJS */}
    <Swiper
          breakpoints={{
            500: {
              width: 500,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            900: {
              width: 900,
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={3}
          navigation
          //pagination={{ clickable: true }}
          //scrollbar={{ draggable: true }}
          //onSwiper={(swiper) => console.log(swiper)}
          //onSlideChange={() => console.log("slide change")}
          // install Swiper modules
        >
            {slider.map((slide)=>
            <SwiperSlide className="bg-color1">
            <div className="container-lg">
              <div className="row">
                <div className='col-md-6 d-flex justify-content-center align-items-center card-item'>
                {/* Image 1 */}
                <img className='img-fluid' src={slide.image} />
                </div>
              </div>
            </div>
          </SwiperSlide>
            )}
          
        </Swiper>
    {/* OUT TEAM */}
    <section className='our-team' >

<div className="titles">
<h1 className='xlg-text'>Наша команда</h1>
<p  className='sm-text'>У нас работает команда профессиональных поваров, <br /> которые десятилетиями работают в кулинарном мире.</p>
</div>

<div className="our-team-cards">

 {ourTeam.map((team)=>
  <div className="card">
      <img src={team.image} alt="Our Team Image" />
      <h2 >{team.name}</h2>
      <p>{team.position}</p>
   </div>
)} 
</div>
    </section>

  </>

   )
}
export default About