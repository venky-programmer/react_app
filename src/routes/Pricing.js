import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCard from '../components/PricingCard'
import ScrollToTop from '../components/ScrollToTop'
import HeroImgPricing from '../components/HeroImgPricing'

const Pricing = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <HeroImgPricing heading='PRICING.' text='Choose your trip.' />
      <PricingCard />
      <Footer />
    </>
  )
}

export default Pricing