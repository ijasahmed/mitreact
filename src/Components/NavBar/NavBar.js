import React from 'react'
import "./NavBar.css"
function NavBar() {
    return (
        <div>
            <header>
            <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid">
  <a className="logo d-flex align-items-center" href="#/"> <img className="rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/f/f5/MIT-social-media-logo-white.png"  alt="" height="30" /></a>
    <a className="navbar-brand" href="#">MIT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link active scroll" href="index.html">COMPANY <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll hvr-overline-from-center scroll" href="#about"> ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll hvr-overline-from-center scroll" href="#services">SERVICES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll hvr-overline-from-center scroll" href="#clients">TEAM</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link scroll hvr-overline-from-center scroll" href="#contact">CONTACT</a>
                    </li>
                </ul>
    </div>
  </div>
</nav>
    </header>
    </div>
    
    )
}

export default NavBar
