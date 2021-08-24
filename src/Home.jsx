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
<div className="home pt-4">
   <div className="row">
       <div className="col-md-8 mx-auto">
           <div className="row">
               <div className="col-md-6 mx-auto">
           {/* //Left */}
       <div className="head mt-5">
         <h1>Hi, This is Gorakh .  <br /> <span style={{color:'red'}}>MERN  STACK  DEVELOPER .</span> </h1>
       </div>
 
         </div>
         <div className="col-md-6 mx-auto mt-3">
           {/* Right */}
     
 <img style={{width:'350px',height:'400px'}} src={mypic} alt="" />
 
         </div>
        </div>
        </div>
        </div>
        </div>
</>
  );
}

export default Home;
