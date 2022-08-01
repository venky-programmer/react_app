import React from 'react'
// import ScrollToTop from './ScrollToTop'

function Modal() {
  return (

    <div className='modalBg'>
      {/* <ScrollToTop /> */}
      <div className='modalContainer'>
        <button className='btnClose'>X</button>
        <div className='body'>
          <h1>Thank you for contacting us. Our team will respond you soon.</h1>
        </div>
        <div className='footer'>
          <button>Ok</button>
        </div>
      </div>
    </div>
  )
}

export default Modal