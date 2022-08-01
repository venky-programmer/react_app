import React, { Component } from 'react'
import './HeroImgPricingStyle.css'

export class HeroImgPricing extends Component {
  render() {
    return (
      <div className='hero-img-pricing'>
        <div className='heading'>
          <h1> {this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroImgPricing