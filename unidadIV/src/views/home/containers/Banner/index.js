import React from 'react'
import classes from './Banner.module.css'
import Info from './Info'
import Skills from './Skills'
import Photo from './Photo'

const Banner = () => {
  return (
    <section id={classes.banner}>
      <Info />
      <Skills />
      <Photo />
    </section>
  )
}

export default Banner