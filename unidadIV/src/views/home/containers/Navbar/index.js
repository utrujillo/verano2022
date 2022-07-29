import React from 'react'
import CustomButton from '../../../../components/Form/CustomButton'
import Text from '../../../../components/Text'
import './navbar.css'

const Navbar = (props) => {
  
  const { data } = props
  // console.log( data )

  return (
    <div class="wrapper_navbar">
      <div class="navbar_logo">
        <img src="assets/images/logo.png" />
      </div>
      <div class="navbar_menu opensans">
        <ul id="navigation">
          {
            data?.menu?.map( item => (
              <li>{ item?.texto }</li>
            ) )
          }
        </ul>
      </div>
      <div class="navbar_buttons">
        {
          data?.button?.map( button => (
            <CustomButton
              title={button?.texto}
              pathImg=''
              css_styles={{ btn_class: 'btn_primary' }}
            />
          ) )
        }
        {/* <CustomButton
          pathImg='assets/images/chat.png'
          css_styles={{ btn_class: 'btn_secondary' }}
          handleClick={ () => console.log('botonPresionado') }
        /> */}
      </div>
    </div>
  )
}

export default Navbar