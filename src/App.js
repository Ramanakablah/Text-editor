import Navbar from './components/Navbar'
import './App.css';
import PropTypes from '../node_modules/prop-types'
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {

  const [mode, setmode] = useState('light')
  const [alerte, setalerte] = useState(null)
  const showalert = (msg, typ) => {
    setalerte({
      message: msg,
      type: typ
    })
    setTimeout(() => {
      setalerte(null)
    }, 1500)
  }
  const ChangeMode = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#001E5B'
      setmode('dark');
      showalert("Dark mode on", "Success")
      document.title = 'Text Editor in Dark mode'
    }
    else {
      setmode('light');
      showalert("Light mode on", "Success")
      document.body.style.backgroundColor = 'white'
      document.title = 'Text Editor in Light mode'
    }
  }

  return (
    <>
      <Navbar mode={mode} ChangeMode={ChangeMode} />
      <Alert alert={alerte} />
      <Textform mode={mode} showalert={showalert} />
      </>
      );
  }

      Navbar.propTypes= {
        first : PropTypes.string
  }

      export default App;
