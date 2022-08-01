import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Video from '../components/Video'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Video />
      <Footer />
    </>
  )
}

export default Home