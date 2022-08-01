import React, { Component } from 'react'
import './HeroImgContactStyle.css'

export class HeroImg extends Component {
  render() {
    return (
      <div className='hero-img-contact'>
        <div className='heading'>
          <h1> {this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default HeroImg