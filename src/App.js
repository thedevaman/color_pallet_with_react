
import './App.css';
import Navbar from './component/Navbar';
import Alert from './component/Alert';
import About from './component/About';
import Textform from './component/Textform';

import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>
  {
    setAlert(null);
  },3000);
 }


 const removeBodyClasses=()=>{
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-danger');
 }

  const toggleMode = ()=>{
    removeBodyClasses();
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title = 'textUtils - Dark Mode';

      setInterval(()=>{
        document.title ='Amazing Color Pallets';
      },2000);

      setInterval(()=>{
        document.title ='Install text Utils Now';
      },1500);

    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      document.title = 'textUtils - Light Mode';

    
    }
  };


    const colorPallet = (cls)=>{
      removeBodyClasses();
      document.body.classList.add('bg-'+cls);
    };


  
  return (
    <>
    <Router>
    <Navbar title ="TextUtils" about="About Page" mode={mode} toggleMode={toggleMode} colorPallet={colorPallet}/>
    <Alert alert={alert}/>
    <div className="container">
    <Switch>
          <Route exact path="/">
          <Textform />
          </Route>
          <Route exact path="/textform">
          <About heading="Enter Your Text Here" mode={mode} showAlert={showAlert}/>
          </Route>
          
    </Switch>
   
    </div>
    </Router>
    </>
    
  );
}

export default App;
