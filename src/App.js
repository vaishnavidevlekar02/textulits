
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
 
  const [color, setColor] = useState('');

  const myColor = (color) => {
    setColor(color);

    // Set the background color dynamically
    document.body.style.backgroundColor = color;
  };

  const[mode ,setMode]=useState('light');

  const[alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({ 
      msg: message,
      type : type
    })
     // #043141
  }
  setTimeout(() => {
    setAlert(null);
  }, 1500);
   const[txt,setTxt]=useState('enable dark mode')

   const toggleMode = () =>{
    if(mode ==='light'){
     setMode('dark');
     document.body.style.backgroundColor='#122451';
     showAlert("dark mode is enable","success");
   
    setTxt('enable light mode');
    }
    else {
     setMode ('light');
    setTxt('enable dark mode');
    document.body.style.backgroundColor='white';
    showAlert("light mode is enable","success");
    }
  }

  return ( 
  <Router>
          
    <div className="App">
    <Navbar tittle='Textutils' about='aboutTextutlis' mode={mode} toggleMode={toggleMode} txt={txt} color={color} myColor={myColor}/>
     <Alert alert={alert}/>
    <div className="container">
   <Routes>
            <Route path="/about" element={<About  mode={mode}/>} />
            <Route path="/" element={<Textform mode={mode} showAlert={showAlert} />} />
          </Routes>
        

    </div>
    </div></Router>
  );
}

export default App;
