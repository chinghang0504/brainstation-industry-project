import React from 'react'
import "./BasePage.scss"
import basePage from "../../assets/industry.png"

function BasePage() {
  return (
    <div className='BasePage'>
        <img className='BasePage__img' src={basePage}></img>
    </div>
  )
}

export default BasePage