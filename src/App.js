import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
// import { useState } from 'react/cjs/react.production.min';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('dark');
  const [alert,setAlert]=useState(null);

  const showAlert =(message, type)=>{
    setAlert({
       msg:message,
       type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor= 'grey';
      showAlert("Dark Mode has been Enabled","success");
      document.title="Textutils - Darkmode";
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor= 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title="Textutils - Lightmode";
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Textutils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}  />} />
      <Route path='/about' element={<About />} />
    </Routes>
        {/* <Switch>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />
          </Route>
          <Route exact path="/about">
          <About/>
          </Route>
        </Switch> */}
      </div>
     </Router>
    </>
  );
}

export default App;
