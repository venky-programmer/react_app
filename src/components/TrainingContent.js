import React from 'react'
import { Link } from 'react-router-dom'
import './TrainingContentStyle.css'
import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'


const TrainingContent = () => {
  return (
    <div className='training'>
      <div className='left'>
        <h1>Training</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, accusamus? Necessitatibus ipsam nihil maiores officiis alias odit perspiciatis, quaerat sint!</p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
      </div>

      <div className='right'>
        <div className='img-container'>
          <div className='img-stack top'>
            <img src={Moon} className='img' alt='Moon' />
          </div>

          <div className='img-stack bottom'>
            <img src={Pod} className='img' alt='Pod' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default TrainingContent