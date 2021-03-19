import React from 'react'
import Tarot from '../assets/img/tarot.png'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
      <img width="50px" src={Tarot} alt="" />
      <a className="navbar-brand" href="../app.jsx">Horoscopo Chapin</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="!#">Horoscopo <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="!#">Información</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
