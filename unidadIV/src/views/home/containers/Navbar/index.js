import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div class="wrapper_navbar">
      <div class="navbar_logo">
        <img src="assets/images/logo.png" />
      </div>
      <div class="navbar_menu opensans">
        <ul id="navigation">
          <li>Inicio</li>
          <li>Habilidades</li>
          <li>Trabajo</li>
          <li>Estrategia</li>
        </ul>
      </div>
      <div class="navbar_buttons">
        <button class="btn_primary opensans">Blog</button>
        <button class="btn_secondary opensans">
          <img src="assets/images/chat.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default Navbar