import React, { useState } from 'react'
import './About.css'
import about_comp from '../../assets/img/about-comp.jpg'
import Title from '../Title/Title'
import Action from '../Call Action/Action'
import mgmt from '../../assets/img/mgmt.jpg'
import Banner from '../Banner/Banner'
const About = () => {

  const [popup, setpopup] = useState(0)

  const displayPopup =(value) =>{
    setpopup(value)
  }

  return (
    <>
    <Banner banHeader={'About Us'} />
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

      <div className='call-action'>
        <Action />
      </div>
      <div className='mgmt-team'>
      <Title title={'Team'} subtitle={'Management Team'} />
        <div className='team-cards'>
          <div className='grid-card' onClick={()=>displayPopup(1)}>
            <img src={mgmt} alt="" />
            <h1>Kishan Kumar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p>
          </div>
          <div className='grid-card'>
            <img src={mgmt} alt="" />
            <h1>Kishan Kumar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p>
          </div>
          <div className='grid-card'>
            <img src={mgmt} alt="" />
            <h1>Kishan Kumar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p>
          </div>
          <div className='grid-card'>
            <img src={mgmt} alt="" />
            <h1>Kishan Kumar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p>
          </div>
          <div className='grid-card'>
            <img src={mgmt} alt="" />
            <h1>Kishan Kumar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p>
          </div>
          <div className='grid-card'>
            <img src={mgmt} alt="" />
            <h1>Kishan Kumar</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, doloribus.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About