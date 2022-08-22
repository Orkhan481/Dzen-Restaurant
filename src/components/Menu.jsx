import React from 'react'
import menuCards from '../menuCards.json';

const Menu = () => {
  return (
    <>
      <section className="menu">
        <div className="menu-banner" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h1>Меню</h1>
          <p className='md-text'>У нас есть китайская еда, японская еда и корейская еда</p>
        </div>
      </section>

      <section className='menu-type'>
        <div className="menu-and-img">

          <div className="img-area" data-aos="fade-right" data-aos-easing="linear"
     data-aos-duration="700">
            <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659041551/Dzen/card-1_tkp7zw.png" alt="Menu 1 image" className='hidden' />
          </div>
          {/* MENU CARD 1 */}
          {/* MAP START*/}
          
          <div className="menu-card" data-aos="zoom-in-up"  data-aos-easing="linear"
          data-aos-duration="700">
                 <h2 className='lg-text'>Китайская кухня</h2>
                 {/* Menu-card-item-1 */}
     
                 <div className="menu-item">
     
                   <div className="title">
                     <h3 className='lg-text'>Курица “Кунг пао”</h3>
                     <span className='lg-text'> 649.90  </span>
                   </div>
                   <p className='md-text'>Курица, сушеный перец чили и кешью</p>
                   <hr />
     
                 </div>
                 
          
          
            {/* Menu-card-item-2 */}
             <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Суп Вонтон</h3>
                <span className='lg-text'> 289.90  </span>
              </div>
              <p className='md-text'>Фаршированные пельмени с пикантным соусом</p>
              <hr />

            </div> 
            {/* Menu-card-item-3 */}
             <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Утка по-пекински</h3>
                <span className='lg-text'> 1349.90  </span>
              </div>
              <p className='md-text'>Утка по-пекински, запеченная с особыми специями</p>
              <hr />

            </div> 
            {/* Menu-card-item-4 */}
             <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Рис Хайнан</h3>
                <span className='lg-text'> 749.90  </span>
              </div>
              <p className='md-text'>Хайнаньский рис с курицей-гриль</p>
              <hr />

            </div> *
            {/* Menu-card-item-5 */}
             <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Димсам</h3>
                <span className='lg-text'> 289.90  </span>
              </div>
              <p className='md-text'>Дим-сам с курицей, креветками и грибами</p>
              <hr />

            </div> 
            {/* Menu-card-item-6 */}
             <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Ангсио Тофу</h3>
                <span className='lg-text'> 289.90  </span>
              </div>
              <p className='md-text'>Шелковый тофу, приготовленный с устричным соусом и грибами</p>

            </div> 
            </div>
          
 {/* MAP Finish*/}
        </div>


        {/* MENU CARD 2 */}
        <div className="menu-and-img card-right">
          <div className="menu-card" data-aos="zoom-in-up"  data-aos-easing="linear"
     data-aos-duration="700">

            <h2 className='lg-text'>Японская кухня</h2>
            {/* Menu-card-item-1 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Суши</h3>
                <span className='lg-text'> 689.90  </span>
              </div>
              <p className='md-text'>Ролл Калифорния, ролл с лососем и драконий ролл.</p>
              <hr />

            </div>
            {/* Menu-card-item-2 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Сашими</h3>
                <span className='lg-text'> 549.90  </span>
              </div>
              <p className='md-text'>Сашими с соевым соусом и лимонным соком</p>
              <hr />

            </div>
            {/* Menu-card-item-3 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Удон</h3>
                <span className='lg-text'> 749.90  </span>
              </div>
              <p className='md-text'>Лапша с обжаренными овощами</p>
              <hr />

            </div>
            {/* Menu-card-item-4 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Рис Хайнан</h3>
                <span className='lg-text'> 749.90  </span>
              </div>
              <p className='md-text'>Хайнаньский рис с курицей-гриль</p>
              <hr />

            </div>
            {/* Menu-card-item-5 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Соба</h3>
                <span className='lg-text'> 589.90  </span>
              </div>
              <p className='md-text'>Лапша из пшеничной муки</p>
              <hr />

            </div>
            {/* Menu-card-item-6 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Рамен</h3>
                <span className='lg-text'> 649.90  </span>
              </div>
              <p className='md-text'>Японская лапша с куриным бульоном</p>

            </div>

          </div>

          <div className="img-area" data-aos="fade-left"  data-aos-easing="linear"
     data-aos-duration="700">
            <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659205500/menu-type-2_izyqwp.png" alt="Menu 1 image" className='hidden' />
          </div>

        </div>


        {/* MENU CARD 3 */}
        <div className="menu-and-img">
          <div className="img-area" data-aos="fade-right"  data-aos-easing="linear"
     data-aos-duration="700">
            <img src="https://res.cloudinary.com/dreqpija0/image/upload/v1659205518/menu-type-3_xpsfqx.png" alt="Menu 1 image" className='hidden' />
          </div>
          <div className="menu-card" data-aos="zoom-in-up"  data-aos-easing="linear"
     data-aos-duration="700">
            <h2 className='lg-text'>Корейская кухня</h2>
            {/* Menu-card-item-1 */}
            <div className="menu-item" data-aos="zoom-in-up"  data-aos-easing="linear"
     data-aos-duration="700">
              <div className="title">
                <h3 className='lg-text'>Самгетанг</h3>
                <span className='lg-text'> 649.90  </span>
              </div>
              <p className='md-text'>Куриный суп с женьшенем и свежим соусом</p>
              <hr />

            </div>
            {/* Menu-card-item-2 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Пулькоги</h3>
                <span className='lg-text'> 699.90  </span>
              </div>
              <p className='md-text'>Ростбиф со специальными специями</p>
              <hr />

            </div>
            {/* Menu-card-item-3 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Пибимпап</h3>
                <span className='lg-text'> 449.90  </span>
              </div>
              <p className='md-text'>Рис, яичница, морковь, шпинат, ростки фасоли, цукини с соусом Гохуджан</p>
              <hr />

            </div>
            {/* Menu-card-item-4 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Боккеум-бап</h3>
                <span className='lg-text'> 649.90  </span>
              </div>
              <p className='md-text'>Жареный рис кимчи с кунжутным маслом и устричным соусом</p>
              <hr />

            </div>
            {/* Menu-card-item-5 */}
            <div className="menu-item">

              <div className="title">
                <h3 className='lg-text'>Чачжанмён</h3>
                <span className='lg-text'> 389.90  </span>
              </div>
              <p className='md-text'>Лапша с черным соевым соусом</p>
              <hr />

            </div>

          </div>

        </div>

      </section>

      <section className='dessert'>

        <div className="dessert-banner" data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h1>Десерты</h1>
        </div>

      </section>

      {/* DESSERT CARDS*/}
      <div className="dessert-cards">
        {/* Dessert card-1 */}
        {menuCards.map((card)=>(
        <div className="dessert-card" >
          <img data-aos="zoom-in-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000" src={card.image} alt="Dessert card 1" />
          <p data-aos="zoom-in-down"
           data-aos-easing="ease-out-cubic"
           data-aos-duration="1000"
            className='sm-text'>{card.title}</p>
          <span className='lg-text'>{card.price}</span>
        </div>
        ))}
      </div>
    </>
  )
}

export default Menu