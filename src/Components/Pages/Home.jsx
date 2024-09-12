import React from 'react'
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Title from '../Title/Title';
import Test from '../Testimonials/Test';
import Toggle from '../Toggle/Toggle';
import Accordian from '../Accordian/Accordian';
import about_comp from '../../assets/img/about-comp.jpg'

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    pauseOnHover: true
  };
  return (
    <>
      <div className='home-page slider-container slider-head'>
        <Slider {...settings}>
          <div>
            <div className='slider1'>
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores, ratione distinctio nihil minima consectetur? Officiis quaerat optio animi labore. Commodi laudantium voluptatibus et, quaerat ratione in necessitatibus reiciendis omnis?</p>
            </div>
          </div>
          <div>
            <div className='slider2'>
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores, ratione distinctio nihil minima consectetur? Officiis quaerat optio animi labore. Commodi laudantium voluptatibus et, quaerat ratione in necessitatibus reiciendis omnis?</p>
            </div>
          </div>
          <div>
            <div className='slider3'>
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores, ratione distinctio nihil minima consectetur? Officiis quaerat optio animi labore. Commodi laudantium voluptatibus et, quaerat ratione in necessitatibus reiciendis omnis?</p>
            </div>
          </div>
          <div>
            <div className='slider4'>
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores, ratione distinctio nihil minima consectetur? Officiis quaerat optio animi labore. Commodi laudantium voluptatibus et, quaerat ratione in necessitatibus reiciendis omnis?</p>
            </div>
          </div>
        </Slider>
      </div>
      <div className='about-container'>
        <div className='about-company'>
          <div className='section'>
            <img src={about_comp} alt="" />
          </div>
          <div className='section'>
            <Title title={'About Company'} subtitle={'Welcome To React Js Programm'} />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rem sit, aspernatur commodi consectetur expedita doloribus fuga dolorem corrupti vitae perspiciatis saepe autem magni? Maiores cupiditate neque unde labore mollitia qui ipsum, fugiat aliquid alias cumque quaerat rem a nihil, commodi error, dolores corporis pariatur et aspernatur odio debitis odit? Qui dolorum aspernatur quibusdam commodi nobis molestias, itaque totam reprehenderit facilis, dolorem ipsum perferendis perspiciatis blanditiis est nesciunt! Suscipit doloremque, velit aut aliquam quod modi fuga quaerat esse voluptate eos rem odio atque illo nulla consectetur, commodi sunt dolore vero iste ad laboriosam qui incidunt! Nam nulla placeat ut consequuntur?</p>
          </div>
        </div>
      </div>
      <div className='about conatiner'>
        <Title title={'About Us'} subtitle={'Client Testimonials'} />
        <Test />
      </div>
      <div className='programs'>
        <Title title={'Programming'} subtitle={'Front End Tehnologies'} />
        <Toggle />
      </div>
      <div className='conatiner'>
        <Title title={'Faqs'} subtitle={'Frequently Ased Questions'} />
        <Accordian />
      </div>
    </>
  )
}

export default Home