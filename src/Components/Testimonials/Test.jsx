import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import test from '../../assets/img/test.png'
import './test.css'
const Test = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
      };
  return (
    <div className='slider-container test-client'>
        <Slider {...settings}>
            <div>
     <img src={test} alt="" />
     <h1>Aruhi 1</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum, illum nihil quam nisi quas alias dolor ullam quo reprehenderit?</p>

            </div>
            <div>
     <img src={test} alt="" />
     <h1>Aruhi 1</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum, illum nihil quam nisi quas alias dolor ullam quo reprehenderit?</p>

            </div>
            <div>
     <img src={test} alt="" />
     <h1>Aruhi 1</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum, illum nihil quam nisi quas alias dolor ullam quo reprehenderit?</p>

            </div>
            <div>
     <img src={test} alt="" />
     <h1>Aruhi 1</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum, illum nihil quam nisi quas alias dolor ullam quo reprehenderit?</p>

            </div>
            <div>
     <img src={test} alt="" />
     <h1>Aruhi 1</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos earum, illum nihil quam nisi quas alias dolor ullam quo reprehenderit?</p>

            </div>
            </Slider>
    </div>
  )
}

export default Test