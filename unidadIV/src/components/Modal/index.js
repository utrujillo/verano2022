import React, { useState } from 'react'
import classes from './Modal.module.css'

const Modal = (props) => {

  const { title, children } = props
  const [ estado, setEstado ] = useState(true)
  const closeModal = () => {
    setEstado(false)
  }

  const toDisplay = estado ? '': classes.hide

  return (
    <div className={`${classes.overlay} ${toDisplay}`}>
      <div className={classes.modal}>
        <div className={classes.modal_title}>
          <div>{title}</div>
          <img src='/close.png' onClick={ () => closeModal() } />
        </div>

        <div className={classes.modal_body}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal