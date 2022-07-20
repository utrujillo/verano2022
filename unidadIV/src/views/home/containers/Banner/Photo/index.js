import React from 'react'
import classes from './Photo.module.css'

const Photo = () => {
  return (
    <div className={classes.photo}>
      <img src="assets/images/python.png" alt="" className="logo_python" />
      <img src="assets/images/react.png" alt="" className="logo_react" />
      <div className="wrapper_image"></div>
    </div>
  )
}

export default Photo