import logo from './logo.svg';
import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import mypic from './mypic.png';

function Home() {
  return (
<>
<div className ="homepage">
<div className="mypic ">
<div className="intro p-0">
<h1 className=" name_tag pt-4">Hi,This is <b>Gorakh</b></h1>
<h1 className="Job name_tag" style={{color:'red'}}><strong  style={{color:'red'}}>Web Developer.</strong></h1>
<div>
  {/* <button href="https://google.com" className="btn btn-outline-danger border-1" >Know More</button>
   */}
   <NavLink className="know_more" to="/about"><button  className=" btn btn-outline-danger">Know More</button></NavLink>
</div>

</div>
<img src={mypic}  className="pt-2" />

</div>

</div>

</>
  );
}

export default Home;
