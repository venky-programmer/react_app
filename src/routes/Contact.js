import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImgContact from '../components/HeroImgContact'
import Form from '../components/Form'
import ScrollToTop from '../components/ScrollToTop'

const Contact = () => {

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {/* <HeroImg heading='CONTACT.' text='Contact VNK Travel' /> */}
      <HeroImgContact heading='CONTACT.' text='Contact VNK Travel' />
      <Form />
      <Footer />
    </>
  )
}

export default Contact