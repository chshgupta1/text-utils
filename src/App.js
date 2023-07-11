import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('dark')

  const [alert, setAlert] = useState(null)

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
    if (mode === 'light') {
      setmode('dark')
      showAlert("Dark mode has been enabled", "success")
      document.title = "Textutils - Dark mode"
    }
    else {
      setmode('light')
      showAlert("Light mode has been enabled", "success")
      document.title = "Textutils - Light mode"
    }
  }

  return (
    <>
      <Navbar title="Code with shubham" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <div className="container">
        <TextForm showAlert={showAlert} heading="Enter your text to analyze" />
      </div> */}

      {/* <About /> */}
      <div className="container">
        {/* use exact keyword to match exact path */}
        <Routes>
          <Route exact path="/" element={
            <TextForm showAlert={showAlert} heading="Enter your text to analyze" />
          } />
          <Route exact path="/about" element={
            <About />
          } />
        </Routes>
      </div>
    </>
  );
}

export default App;
