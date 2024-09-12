import React from 'react'
import './Title.css'
const Title = ({title,subtitle}) => {
  return (
    <div className='titles'>
      <h6>{title}</h6>
      <h1>{subtitle}</h1>
    </div>
  )
}

export default Title