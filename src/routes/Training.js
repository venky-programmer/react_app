import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrainingContent from '../components/TrainingContent'
import ScrollToTop from '../components/ScrollToTop'
import HeroImgTraining from '../components/HeroImgTraining'

const Training = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HeroImgTraining heading='TRAINING.' text='Pre-Flight & In-Flight Training' />
      <TrainingContent />
      <Footer />
    </>
  )
}

export default Training