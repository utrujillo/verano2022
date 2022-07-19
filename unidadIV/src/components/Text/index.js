import React from 'react'

const Text = (props) => {
  const { title, css_styles } = props
  return(
    <div className={css_styles}>{title}</div>
  )
}

export default Text