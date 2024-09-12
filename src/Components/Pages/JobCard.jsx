import React from 'react'
import './Careers.css'
import dayjs from 'dayjs'


const Careers = (props) => {
 // const skills=['Wordpress', 'Javscript', 'React Js'];
  const day1=dayjs(Date.now());
  const daydiff = day1.diff(props.postedOn, 'day')
  return (
<div className='job-card-list1'>
          <div className='job-card'>
            <div className='job-detail'>
              <h1>{props.title}</h1>
              <p>{props.type} &#x2022; {props.experience} &#x2022; {props.location}</p>
              <div className='job-skills'>
                {props.skills.map((item)=>(
                  <p key={item} className='skill-btn'>{item}</p>
                ))}
              </div>
            </div>
            <div className='job-meta'>
              <p>Posted {daydiff} days Ago</p>
              <div>
                <a href={props.job_link}>
                <button className='apply-btn'>Apply</button></a>
              </div>
            </div>
          </div>
       </div>
  )
}

export default Careers