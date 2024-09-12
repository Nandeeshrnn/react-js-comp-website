import React, { useState } from 'react'
import Title from '../Title/Title'
import './Careers.css'
import dayjs from 'dayjs'
import JobCard from './JobCard'
import { JobDummyData } from './JobDummyData'
import Banner from '../Banner/Banner'



const Careers = () => {

const [jobset, setJob] = useState({
  title:'',
  type:'',
  location:'',
  experience:''
})

const handleChange=(e)=>{
  setJob(prev=>({
    ...prev, [e.target.name]:e.target.value
  }))
}

const filteredJobs = JobDummyData.filter(jobItem => {
  return (
    (!jobset.title || jobItem.title === jobset.title) &&
    (!jobset.type || jobItem.type === jobset.type) &&
    (!jobset.location || jobItem.location === jobset.location) &&
    (!jobset.experience || jobItem.experience === jobset.experience)
  );
});

  //const skills=['Wordpress', 'Javscript', 'React Js'];
  const day1=dayjs(Date.now());
  const daydiff = day1.diff('2024-08-26', 'day')
  return (
    <>
    <Banner banHeader={'Careers'} />
    <div className='careers-page'> 
       <div className='career-head'>
        <Title title={'Careers'} subtitle={'Search Job Openings'} />

       </div>

       <div className='careers-serach'>
           <select value={jobset.title} onChange={handleChange} name="title" className='search'>
            <option value='' >Job Role</option>
            <option value='Wordpress Developer' >Wordpress Developer </option>
            <option value='Web Designer' >Web Designer</option>
            <option value='Web Developer' >Web Developer</option>
            <option value='Digital Marketing' >Digital Marketing</option>
           </select>
           <select value={jobset.type} onChange={handleChange} name="type" className='search'>
            <option value='' >Job Type</option>
            <option value='Full Time' >Full-Time</option>
            <option value='Part Time' >Part-Time</option>
            <option value='intern' >Internship</option>
           </select>
           <select value={jobset.location} onChange={handleChange} name="location" className='search'>
            <option value='' >Location</option>
            <option value='Bangalore' >Bangalore</option>
            <option value='Hydarabad' >Hydarabad</option>
            <option value='Delhi' >Delhi</option>
            <option value='Chennai' >Chennai</option>
           </select>
           <select value={jobset.experience} onChange={handleChange} name="experience" className='search'>
            <option value='' >Experience</option>
            <option value='entry-level' >Entry-Level</option>
            <option value='Mid-level' >Mid-Level</option>
            <option value='senior-level' >Senior-Level</option>
           </select>
       </div>
       <div className='job-card-list'>
        {filteredJobs.map((job)=>(
          <JobCard key={job.id} {...job} />
        ))}
       </div>
    </div>
    </>
  )
}

export default Careers