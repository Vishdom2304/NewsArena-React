import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">NewsArena</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu" style={{ backgroundColor: 'black' }} aria-labelledby="navbarDropdown" >
                  <li><Link className="dropdown-item" to="/category/business">Business</Link></li>
                  <li><hr className="dropdown-divider text-light" /></li>
                  <li><Link className="dropdown-item" to="/category/entertainment">Entertainment</Link></li>
                  <li><hr className="dropdown-divider text-light" /></li>
                  <li><Link className="dropdown-item" to="/category/general">General</Link></li>
                  <li><hr className="dropdown-divider text-light" /></li>
                  <li><Link className="dropdown-item" to="/category/health">Health</Link></li>
                  <li><hr className="dropdown-divider text-light" /></li>
                  <li><Link className="dropdown-item" to="/category/science">Science</Link></li>
                  <li><hr className="dropdown-divider text-light" /></li>
                  <li><Link className="dropdown-item" to="/category/sports">Sports</Link></li>
                  <li><hr className="dropdown-divider text-light" /></li>
                  <li><Link className="dropdown-item" to="/category/technology">Technology</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
