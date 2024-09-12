import React from 'react'
import './Banner.css'

const Banner = (props) => {
  return (
    <div className='Banner-heading'>
        <h1>{props.banHeader}</h1>
    </div>
  )
}

export default Banner