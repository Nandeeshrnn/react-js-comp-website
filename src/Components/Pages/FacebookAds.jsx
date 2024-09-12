import React from 'react'
import Banner from '../Banner/Banner'
import Title from '../Title/Title'
import ads_img from '../../assets/img/about-comp.jpg'
import './Advertising.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

import { Service_slides } from './Service_slide'

const FacebookAds = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,

        }
      },
    ]
  };
  return (
    <>
      <div>
        <Banner banHeader={'Facebook Ads Company'} />
      </div>
      <div className='advertising-page'>
        <Title title={"Marketing"} subtitle={"Digital marketing Company"} />
        <div className='ads-des-sec1'>
          <p className='des-sec1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora omnis architecto temporibus quo. Doloremque temporibus consequatur culpa voluptate necessitatibus illum, possimus obcaecati saepe molestiae ea. Eligendi beatae dolorum necessitatibus ratione. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi autem nihil consequuntur illum veniam rem eos facilis quo reiciendis voluptates ad non aperiam neque animi obcaecati, perspiciatis iure praesentium placeat ex quidem. Amet distinctio libero blanditiis voluptatibus repellat expedita vel, molestiae fugit. Accusamus fugiat repellat adipisci consequatur. Distinctio consequuntur blanditiis aliquam veritatis iste sed amet nisi fugit, molestiae expedita quisquam inventore facilis qui minus illum quaerat nihil sit dolor pariatur.</p>
          <img className='des-sec1' src={ads_img} />
        </div>
      </div>
      <div className='ads-des-sec2'>
        <Title subtitle={'Lorem, ipsum dolor Lorem'} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi accusantium amet Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eligendi accusantium amet ullam odio ducimus, sequi cumque ab iste, deleniti aspernatur adipisci. Blanditiis dolores labore repellat autem ad quis quibusdam.</p>
        <div className='ads-boxes'>
          <div className='ads-box'>
            <span>10+</span>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className='ads-box'>
            <p>Lorem, ipsum dolor Lorem, ipsum dolor.</p>
          </div>
          <div className='ads-box'>
            <span>10+</span>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className='ads-box'>
            <p>Lorem, ipsum dolor Lorem, ipsum dolor.</p>
          </div>
          <div className='ads-box'>
            <span>10+</span>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>

      </div>
      <div className="ads-des-sec3">
        <Title subtitle={'Lorem, ipsum dolor Lorem.'} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis est expedita mollitia. Repellat, incidunt? Dolores quo praesentium pariatur sed quasi necessitatibus modi dolore ipsa quis provident, expedita dolorem natus neque aspernatur libero, exercitationem repellat doloribus, quisquam nemo obcaecati itaque?</p>
        <div className='services-sliders'>
        <Slider {...settings}>
            {Service_slides.map((item) => (
              
              <div className='slides' key={item.id}>
                <img src={item.img} />
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
              </div>
             
            ))}
          </Slider>
        </div>

      </div>
    </>
  )
}

export default FacebookAds