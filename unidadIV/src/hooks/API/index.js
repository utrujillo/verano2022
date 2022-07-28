import React from 'react'

const useAPI = () => {
  /**
   * 
   * @param {recurso} recurso ej. navbars o estudiantes 
   */
  const getData = async (recurso) => {
    const URI = `http://localhost:1337/api/${recurso}`
    const response = await fetch(URI)
    return await response.json()
  }

  const postData = ( recurso, body ) => {
    // Codigo del post
    console.log('Inserar datos')
  }

  return { getData, postData }
}

export default useAPI