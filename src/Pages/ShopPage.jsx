import React from 'react'
import HeroSection from '../Components/Hero/HeroSection'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'

const ShopPage = () => {
  return (
    <>
        <HeroSection />
        <Popular />
        <Offers />
        <NewCollections />
    </>

  )
}

export default ShopPage