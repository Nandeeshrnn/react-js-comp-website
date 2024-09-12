import React from 'react'
import './Services.css'
import about_comp from '../../assets/img/about-comp.jpg'
import Title from '../Title/Title'
import { servicesData } from './services-data'
import Accordian from '../Accordian/Accordian'
import Action from '../Call Action/Action'
import Banner from '../Banner/Banner'

const Services = () => {
return(
  <>
  <Banner banHeader={'Our Solutions'} />
<div className='services-page'>
   <div className='about-company'>
        <div className='section'>
          <img src={about_comp} alt="" />
        </div>
        <div className='section'>
          <Title title={'About Company'} subtitle={'Welcome To React Js Programm'} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rem sit, aspernatur commodi consectetur expedita doloribus fuga dolorem corrupti vitae perspiciatis saepe autem magni? Maiores cupiditate neque unde labore mollitia qui ipsum, fugiat aliquid alias cumque quaerat rem a nihil, commodi error, dolores corporis pariatur et aspernatur odio debitis odit? Qui dolorum aspernatur quibusdam commodi nobis molestias, itaque totam reprehenderit facilis, dolorem ipsum perferendis perspiciatis blanditiis est nesciunt! Suscipit doloremque, velit aut aliquam quod modi fuga quaerat esse voluptate eos rem odio atque illo nulla consectetur, commodi sunt dolore vero iste ad laboriosam qui incidunt! Nam nulla placeat ut consequuntur?</p>
        </div>
      </div>
      <Title title={"services"} subtitle={'What We Offer?'} />
      <div className='services-card'>
  
          {servicesData.map((item,index)=>(
            <div className='card' key={index}>
              <img src={item.img} />
               <h1>{item.title}</h1>
               <p>{item.desc}</p>
            </div>
          ))}
      </div>
<div className='services-call'>
  <Action />
</div>
      <div className='services-faqs'>
        <Title title={'Faqs'} subtitle={'Frequently Asked Questions'} />
        <Accordian />
      </div>
</div>
</>
)
}

export default Services