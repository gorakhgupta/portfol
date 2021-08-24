import logo from './logo.svg';
import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
// import './index.css';
import Border from '@material-ui/icons/BorderColor';

function Navbar() {
  return (
<>
{/* <h1>NavBar</h1> */}
<nav className="navbar navbar-expand-lg  mynav">
  <div className="container-fluid">
  {/* <BorderColorIcon/> */}
    <NavLink className="navbar-brand" id="g" to="/">Portfolio <Border/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
    <div className="secNavDiv">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exact activeClassName="menu_active" className="nav-link active"  id="g"  aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  id="g" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  id="g" to="/skills">Skills</NavLink>
        </li>
        <li className="nav-item dropdown" id="g">
          <NavLink className="nav-link dropdown-toggle dropdown"   to="/project" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Project
          </NavLink>
          <ul className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown">
            <li><a style={{color:'green'}} className="dropdown-item bg-dark  " id="dp"  href="https://611759d203e9ff52ae21ef4e--gorakh-chat-app.netlify.app/">CHATAPP</a></li>
            <li><a style={{color:'green'}} className="dropdown-item "  id="dp" href="https://weather-app-gk.herokuapp.com/">WEATHERAPP</a></li>
            <li><a style={{color:'green'}} className="dropdown-item "  id="dp" href="https://gorakhgupta.github.io/Covid-Tracker/">COVIDTRACKER</a></li>
            <li><a style={{color:'green'}} className="dropdown-item "  id="dp" href="https://gorakhgupta.github.io/snakeGame/">SNAKEGAME</a></li>
            <li><a style={{color:'green'}} className="dropdown-item "  id="dp" href="https://gorakhgupta.github.io/PostMaster/">POSTMAN</a></li>
            <li><a style={{color:'green'}} className="dropdown-item "  id="dp" href="https://gorakhgupta.github.io/netflix/">NETFLIX</a></li>
         
            <li><a style={{color:'green'}}  className="dropdown-item " id="dp"  href="https://gorakhgupta.github.io/Form-Validation/">FORM-VALIDATION</a></li>
            <li><a style={{color:'green'}}  className="dropdown-item " id="dp"  href="https://gorakhgupta.github.io/bounce_animation/">BOUNCING_BALL</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact" id="g"  >Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
  );
}

export default Navbar;
