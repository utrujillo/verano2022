import React from 'react'
import classes from './Skills.module.css'

const Skills = () => {
  return (
    <div className={`${classes.skills} opensans fs_14`}>
      <div className={classes.skills_grid}>
        <div className={classes.bar} style={{ "width": "100%" }}></div>
        <div>Programacion</div>
        <div className={classes.bar} style={{ "width": "80%" }}></div>
        <div>Disenho</div>
        <div className={classes.bar} style={{ "width": "90%" }}></div>
        <div>APIs</div>
        <div className={classes.bar} style={{ "width": "85%" }}></div>
        <div>Documentacion</div>
      </div>
    </div>
  )
}

export default Skills