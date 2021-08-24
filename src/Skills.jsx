import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
const Skills = () => {
    return (
        <div className="skills">
   <div className="row">
       <div className="col-md-8 mx-auto">
           <div className="row">
               <div className="col-md-10 mx-auto">
               <div className="heading">
           <h1>Here is My Top Skills 📝</h1>
       </div>
         <div className="langauge">

    <ul>
        <li><h4> Familiar Programming Language </h4></li>
        <ol>
            <li>C</li>
            <li>C++</li>
            <li>JAVASCRIPT</li>
        </ol>
    </ul>
         </div>
         <div className="frontendtech">

    <ul>
        <li><h4>FrontEnd Technology and FrameWorks </h4></li>
        <ol>
            <li>HTML</li>
            <li>CSS</li>
            <li>BOOTSTRAP</li>
            <li>MATERIAL-UI</li>
            <li>REACTJS</li>
        </ol>
    </ul>
         </div>
         <div className="backendtech">

<ul>
    <li><h4>BackEnd Technology and FrameWorks </h4></li>
    <ol>
        <li>NODEJS</li>
        <li>EXPRESSJS</li>
        <li>MONGODB</li>
        <li>MONGOOSE</li>
        <li>REACTJS</li>
    </ol>
</ul>
     </div>
     <div className="backendtech">

<ul>
    <li><h4>Some Tools and Command </h4></li>
    <ol>
        <li>GIT</li>
        <li>GITHUB</li>
        <li>NETLIFY</li>
        <li>HEROKU</li>
    </ol>
</ul>
     </div>

     <div className="solving">

<ul>
    <li><h4>Technical Interest </h4></li>
    <ol>
        <li>DATA STRUCTURE</li>
        <li>ALGORITHM</li>
        <li>DEVELOPMENT</li>
        
    </ol>
</ul>
     </div>
               </div>
           </div>
       </div>
   </div>
         
        </div>
    )
}

export default Skills
