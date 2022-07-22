import React from 'react'
import Navbar from './containers/Navbar'
import Banner from './containers/Banner'
import Works from './containers/Works'
import Strategy from './containers/Strategy'
import Footer from './containers/Footer'
import Modal from '../../components/Modal'

const ViewHome = () => {
  return (
    <>
      {/* <Modal title='Ventana modal 1'>
        Este es el contenido de la ventana modal 1
      </Modal> */}

      <Modal title='Ventana modal 2'>
        <p>Esto es un parrafo</p>
        <img src='/logo192.png' />
        <div>Esto es un div</div>
      </Modal>
      <Navbar />
      <Banner />
      <Works />
      <Strategy />
      <Footer />
    </>
  )
}

export default ViewHome