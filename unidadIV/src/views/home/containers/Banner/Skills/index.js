import React from 'react'
import data_skills from './data_skills'
import classes from './Skills.module.css' 

const Skills = () => {
  return (
    <div className={`${classes.skills} opensans fs_14`}>
      <div className={classes.skills_grid}>
        {
          data_skills.map( skill => {
            return(
              <>
                <div
                  className={classes.bar}
                  style={{ "width": `${skill.porcentaje}%` }}
                ></div>
                <div>{ skill.habilidad }</div>
              </>
            )
          } )
        }
      </div>
    </div>
  )
}

export default Skills