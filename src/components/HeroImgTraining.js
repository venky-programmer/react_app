import React, { Component } from 'react'
import './HeroImgTrainingStyle.css'

export class HeroImgTraining extends Component {
  render() {
    return (
      <div className='hero-img-training'>
        <div className='heading'>
          <h1> {this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroImgTraining