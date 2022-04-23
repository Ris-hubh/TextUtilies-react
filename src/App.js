import './App.css';

import Navebar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [mode, setmode] = useState(`light`)
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === `light`) {
      setmode(`dark`);
      document.body.style.background = '#212529'
      showAlert("dark mode enabled!", "success");
    } else {
      setmode(`light`);
      document.body.style.background = 'white'
      showAlert("lght mode enabled!", "success");
    }
  }
  return (
    <>

        <Navebar title="TextUtiles" mode={mode} toggleMode={toggleMode} about="about us" />
        <Alert alert={alert} />
        <div className="container my-3">
              <TextForm showAlert={showAlert} heading="Enter text" mode={mode} />
        </div>

    </>
  );
}

export default App;
