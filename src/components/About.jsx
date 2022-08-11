import React from 'react'

const About = () => (
  <>

    <section className="about">

      <div className="about-banner">
        <h1 className='xlg-text'>Коллектив и история</h1>
      </div>

    </section>

    <section className='about-content'>

      <div className="left-side">

        <h1 className='lg-text'>История <br /> ресторана</h1>
        <p className='sm-text'>Добро пожаловать в ресторан 48 Cuisine. Этот ресторан был основан в 2012 году с концепцией изысканной азиатской кухни, приготовленной профессиональным шеф-поваром.</p>
        <p className='sm-text'>Наш ресторан предлагает разнообразные азиатские блюда, включая китайскую кухню, японскую кухню, корейскую кухню.</p>
        <p className='sm-text'>У нас есть 3 зала оформленных. первый зал с видом на набережную, второй - классический концептуальный зал с красивой деревенской атмосферой, третий зал оформлен в современном стиле.</p>

      </div>

      <div className="right-side">
        <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659039534/Dzen/3_uroy9e.png" alt="About Image" />
      </div>

    </section>
    {/* OUT TEAM */}
    <section className='our-team' >

<div className="titles">
<h1 className='xlg-text'>Наша команда</h1>
<p  className='sm-text'>У нас работает команда профессиональных поваров, <br /> которые десятилетиями работают в кулинарном мире.</p>
</div>

<div className="our-team-cards">
{/* Our Team  1*/}
   <div className="card">
      <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659214561/Dzen/team-1_wz8wej.png" alt="Our Team Image" />
      <h2 >Алексей Кузнецов</h2>
      <p>Менеджер</p>
   </div>
{/* Our Team  2*/}
   <div className="card">
      <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659214559/Dzen/team-2_yijivt.png" alt="Our Team Image" />
      <h2>Минори Сато</h2>
      <p>Шеф-повар</p>
   </div>
{/* Our Team  3*/}
   <div className="card">
      <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659214561/Dzen/team-3_y1fail.png" alt="Our Team Image" />
      <h2>Денис Петров</h2>
      <p>Шеф-повар</p>
   </div>
{/* Our Team  4*/}
   <div className="card">
      <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659214560/Dzen/team-4_blnntl.png" alt="Our Team Image" />
      <h2>Хидео Ватанабэ</h2>
      <p>Су-шеф</p>
   </div>

</div>

    </section>

  </>
)

export default About