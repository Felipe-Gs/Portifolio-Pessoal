import React from "react";
import logo from '../logo_felipe.png';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">

      <a className="navbar-brand" href="#"><img className='logo' src={logo} alt="logo..."/></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span class="sr-only"></span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Instagram</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Linkedin</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Curriculo</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About me</a>
          </li>
          
        </ul>

        </div>

  </div>

</nav>
    )
}