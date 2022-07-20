import React from 'react'
import classes from './Info.module.css'

const Info = () => {
  return(
    <div className={classes.info}>
      <div className="wrapper_info">
        <h1 className="fs_48 poppins fw_bold black">Hola! yo soy <span className="tag_primary roboto fs_24 fw_normal ml_20">Developer</span></h1>
        <h1 className="fs_48 poppins fw_bold black">Uziel Trujillo Colon</h1>
      </div>
      <div className="wrapper_experience mt_5">
        <p className="opensans fs_14">Desarrollo de aplicaciones e interfaces con mas de</p>
        <p className="opensans fs_14 mt_10">10 anhos de experiencia</p>
      </div>
      <div className="d_flex align_items__center mt_20">
        <div className="btn_warning opensans fs_16">Contactame</div>
        <div className="d_flex justify_content__start align_items__center ml_30">
          <div className="opensans fs_16">Proyectos</div>
          <img src="assets/images/box.png" alt="" />
        </div>
      </div>
      <div className="wrapper_info__text opensans mt_30">
        <div className="info_text__title fs_20 fw_bold">+50</div>
        <div className="info_text_description fs_12">Clientes satisfechos</div>
        <div className="info_text_description fs_12">alrededor del mundo</div>
      </div>
      <div className="d_flex mt_20">
        <div className="wrapper_info__text opensans">
          <div className="info_text__title fs_20 fw_bold">+150</div>
          <div className="info_text_description fs_12">Proyectos realizados</div>
        </div>
        <div className="wrapper_info__text opensans ml_40">
          <div className="info_text__title fs_20 fw_bold">Contacto</div>
          <div className="info_text_description fs_12">contacto@utrujillo.com</div>
        </div>
      </div>
    </div>
  )
}

export default Info