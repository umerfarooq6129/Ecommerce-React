import React from 'react'
import HeroSection from '../Components/Hero/HeroSection'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const ShopPage = () => {
  return (
    <>
        <HeroSection />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
    </>

  )
}

export default ShopPage