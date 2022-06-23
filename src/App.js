import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Alert from './component/Alert';

import { useState } from 'react';

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
    if(mode=='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
    }
  };


    const colorPallet = (cls)=>{
      removeBodyClasses();
      document.body.classList.add('bg-'+cls);
    };


  
  return (
    <>
    <Navbar title ="TextUtils" about="About Page" mode={mode} toggleMode={toggleMode} colorPallet={colorPallet}/>
    <Alert alert={alert}/>
    </>
    
  );
}

export default App;
