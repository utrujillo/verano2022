import React from 'react'
import Navbar from './containers/Navbar'
import Banner from './containers/Banner'
import Works from './containers/Works'
import Strategy from './containers/Strategy'
import Footer from './containers/Footer'

const ViewHome = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Works />
      <Strategy />
      <Footer />
    </>
  )
}

export default ViewHome