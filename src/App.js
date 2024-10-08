import React from 'react'
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
  


function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
       msg: message,
       type: type
    })

    setTimeout(()=> {
      setAlert(null);

    },2000);
  }

  const removeBodyClasses= () => {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }
  

  const toggleMode = (cls) => {
    console.log(cls); 
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    
     if (mode=== 'light'){
     setMode('dark');
     document.body.style.backgroundColor='#042743';
     showAlert("Dark mode has been enabled", "success");
     document.title ="Textutils-Dark Mode";
    }
     else
    {
     setMode('light');
     document.body.style.backgroundColor='white';
     showAlert("Light mode has been enabled", "success");
     document.title ='Textutils-Light Mode';
     
    }
}

  return (
    <>
    <Router>
    <Navbar title= "Textutilis" mode= {mode} toggleMode ={toggleMode} aboutText= "About Textutilis"/>
     <Alert alert= {alert}/>
    <div className= "container my-3"> 
    <Routes>
          <Route exact path="/about" element = { <About mode={mode} />}/>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading = "Enter the text to analyse below" mode= {mode}/>}/>
    </Routes>
  
    </div>
    </Router>
    </> 
  );
}

export default App;
  

// we have commented out our react router and about component as theres nothing in about to navigate