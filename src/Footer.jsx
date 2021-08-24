import logo from './logo.svg';
import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import './index.css';
import CopyrightIcon from '@material-ui/icons/Copyright';



function Footer() {
  return (
<>
<footer className="footer" style={{backgroundColor:'red'}}>
<p>©️ 2021 Copyright | Portfolio</p>
  </footer>
</>
  );
}

export default Footer;
