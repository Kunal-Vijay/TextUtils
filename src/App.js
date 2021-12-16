import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  // const setAlert = (msg,type)=>({
  //   msg:msg,
  //   type:type
  // })
  
  

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      // setAlert("Dark mode has been enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // setAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Alert alert={alert} /> */}
      <div className="container">
        <TextForm heading='Enter Your Text' mode={mode} />
      </div>
    </>
  );
}

export default App;