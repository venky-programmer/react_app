import React from 'react'
import './FooterStyle.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaSearchLocation size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <p>707, Panch St.</p>
              <h4>Worli, Mumbai</h4>
            </div>
          </div>

          <div className='phone'>
            <h4><FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />+91 8086548556</h4>
          </div>

          <div className='email'>
            <h4><FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />venktravel@gmail.com</h4>
          </div>

        </div>

        <div className='right'>
          <h4>About the company</h4>
          <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti laboriosam cumque voluptatem voluptate, quae, suscipit dolores explicabo ipsam aliquid ut repudiandae cupiditate earum repellat at totam consectetur recusandae vel sed!"</p>
          <div className='social'>
            <FaFacebook className='fb' size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaTwitter className='twt' size={30} style={{ color: '#fff', marginRight: '1rem' }} />
            <FaLinkedin className='link' size={30} style={{ color: '#fff', marginRight: '1rem' }} />
          </div>
        </div>




      </div>
    </div>
  )
}

export default Footer