import logo from './logo.svg';
import React from 'react';
import {NavLink} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import bg from './bg.jfif';

function About() {
  return (
<>
<div className="about mt-4">
<div className="row">
<div className="col-md-8 mx-auto">
<h2 style={{color:'white'}}>Hello Guys,This is Gorakh kumar Gupta 🙂. <br /><b> I am doing B. Tech <span style={{color:'red'}}>Computer science engineering </span>, currently in <span style={{color:'yellow'}}>3rd Year from IIIT RANCHI</span></b>
<br />I used to do coding and Web-deveploment I code in c++ and till the date Today I am a <span style={{color:'red'}}>MERN STACK developer</span> .
I have been in this field after my 2nd semester. My cgpa is not so good but its descent enough because I had never 
study hard for that So, I remember its <span style={{color:'yellow',fontWeight:'bolder  '}}>8.0 CGPA</span> overall till the date.
Also,I have Done Alots of Project You Can see it in my Project section.
</h2>
<h2 style={{color:'red'}}>Thank You 😄 </h2>
</div>
<br />
</div>
</div>

</>
  );
}

export default About;
