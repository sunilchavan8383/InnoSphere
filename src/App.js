import img from './images/28766185_7495399.svg';
import img3 from './images/6195525_3156619.svg';
import img6 from './images/19245721_6099964.svg';
import img7 from './images/man_7122923.png'
import img5 from './images/taking-notes-concept-illustration.png'
import img4 from './images/aaa.png';
import img8 from './images/OBJECTS (1).svg';
import './App.css';
import footer from "./components/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';

import {useEffect } from 'react';

function App() {
  const [isToolsVisible, setIsToolsVisible] = useState(false);
  const toggleTools = () => {
    setIsToolsVisible(!isToolsVisible);
  };
 


  return (
    <div className="App">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">InnoSphere</a>
    <a className="nav-link" href="#" id="aa" onClick={toggleTools}>Tools</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Teacher</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Student
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
   
  </div>
   </nav>
    
   <div className='gradient-background'>
    <div className='title'>
      <div className='welcome'>
        <div className='head'>
          <h1>Hello User !</h1>
          <p className='disc'>Welcome, Explore Your Gateway to Smarter Learning and Seamless Collaboration! </p>
          <button type="button" id='nn' class="btn-primary">Start</button>
        </div>
        <div className='img'>
          <img src={img} width={400}></img>
        </div>
      </div>
      <div className='forums'>
      <h1>Explore Forums</h1>
      <p className='disc'>Welcome, Explore Your Gateway to Smarter Learning and Seamless Collaboration! </p>
      <button type="button" class="btn-primary">Explore</button>
      <div className='forumimg'>
      
      </div>
      </div>

    </div>
    <div className='tools'>
      <div className='f1'>
        <div className='stats'>
        <img src={img3} style={{ width: "100%", height: "90%" }} alt="Responsive image" />

        </div>
        <div className='ach' >
        <img src={img4}  style={{ width: "90%", height: "90%" }} alt="Responsive image" />
        </div>
      </div>
      <div className='f2'>
        <div className='att'>
        <img src={img6} style={{ width: "auto", height: "90%" }} alt="Responsive image" />
        </div>
        <div className='notes'>
       <img src={img5} id='nn' style={{ width: "auto", height: "90%" }} alt="Responsive image"  />
        </div>
      </div>
      <div className='f3'>
        <div className='t1'>
        <img src={img7} width={80}/>
        </div>
        <div className='t2'>
        <img src={img7} width={80}/>
        </div>
        <div className='t3'>
        <img src={img7} width={80}/>
        </div>
      </div>
      <div className='f4'>
        <div className='s1'>
        <img src={img7} width={80}/>
        </div>
        <div className='s2'>
        <img src={img7} width={80}/>
        </div>
        <div className='s3'>
        <img src={img7} width={80}/>
        </div>
      </div>

    </div>
    <div className={isToolsVisible ? 'acttooll' : 'acttool'}>
    <div className='f1'>
        <div className='stats'>
        <img src={img3} style={{ width: "100%", height: "90%" }} alt="Responsive image" />

        </div>
        <div className='ach'>
        <img src={img4} style={{ width: "90%", height: "90%" }} alt="Responsive image" />
        </div>
     
      
        <div className='att'>
        <img src={img6} style={{  width: "100%", height: "90%"}} alt="Responsive image" />
        </div>
        <div className='notes'>
        <img src={img5} style={{  width: "100%", height: "90%"}} alt="Responsive image" />
        </div>

         <div className='tools'>
       <div className='f1'>
        <div className='stats'>
        <img src={img3} style={{ width: "100%", height: "90%" }} alt="Responsive image" />
        </div>
        <div className='ach'>
        <img src={img4} style={{ width: "90%", height: "90%" }} alt="Responsive image" />
        </div>
     
      
        <div className='att'>
        <img src={img6} style={{  width: "100%", height: "90%"}} alt="Responsive image" />
        </div>
        <div className='notes'>
        <img src={img5} style={{  width: "100%", height: "90%"}} alt="Responsive image" />
        </div>
        
    </div>
    </div>
    
     
    </div>

   </div>
   <footer className='ft'>

        <div className='binf'>
          <div className='logo'>
            <img width={100}></img>
          </div>
          <div className='contact'>
        <h5>Contact</h5>
         
            <li>InnoSphere</li>
            <li>InnoSphere@gmail.com</li>
            <li>+129381</li>
      
        </div>
        <div className='mt'>
        <h5>Move to</h5>
         
        <li>Home</li>
        <li>Forums</li>
        <li>Contact</li>
      
        </div>
        
        
        </div>

    </footer>

    </div>
    </div>
  );
}

export default App;
