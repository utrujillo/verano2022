import React from 'react'
import CustomButton from '../../../../components/Form/CustomButton'
import Text from '../../../../components/Text'
import './navbar.css'

const Navbar = () => {
  return (
    <div class="wrapper_navbar">
      <div class="navbar_logo">
        <img src="assets/images/logo.png" />
      </div>
      <div class="navbar_menu opensans">
        <ul id="navigation">
          <li className='fs_48'>Inicio</li>
          <li>Habilidades</li>
          <li>Trabajo</li>
          <li>Estrategia</li>
          <li><Text title='Soluciones' css_styles='fs_20 fw_bold' /></li>
          <li><Text title='Hola' /></li>
        </ul>
      </div>
      <div class="navbar_buttons">
        <CustomButton
          title='Vlog'
          css_styles={{ btn_class: 'btn_primary' }}
          handleClick={ () => alert('hola') }
        />
        <CustomButton
          pathImg='assets/images/chat.png'
          css_styles={{ btn_class: 'btn_secondary' }}
          handleClick={ () => console.log('botonPresionado') }
        />
      </div>
    </div>
  )
}

export default Navbar