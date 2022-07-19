import React from 'react'
import Text from '../../Text'
import classes from './CustomButton.module.css'

const CustomButton = (props) => {
  
  const { title, pathImg, css_styles, handleClick } = props
  const { btn_class } = css_styles

  return (
    <button
      class={`${classes[btn_class]} opensans`}
      onClick={handleClick}
    >
      { title && (<Text title={title} />) }
      { 
        pathImg &&
        <img src={pathImg} alt='' />
      }
    </button>
  )
}

export default CustomButton