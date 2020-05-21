import React from 'react'
import './css/menu-bar.css'
import QueryBar from './QueryBar'

const MenuBar = () => {
  return (
    <div className="menu-bar-wrapper">
      <div className="logo">Search<span className="logo-bold">Doggie</span></div>
      <div className="paw-print" />
      <QueryBar />
    </div>
  )
}

export default MenuBar
