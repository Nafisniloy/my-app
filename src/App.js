// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Body from './components/Body';
import About from './components/About';
import Alart from './components/Alart';
import React, { useState } from 'react'

// import { render } from "react-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [alert, setalert] = useState(null)
  const showAllert =(message,type)=>{
   setalert({ 
    msg : message,
    type : type
  })
  setTimeout(() => {
    setalert(null)
  }, 1500);
  }
  
  
  return (
   <>
<Navbar title="Text Converter" aboutText=" About Text Converter" />
 <Alart alert={alert}/>
 <Body showAllert={showAllert}/>
   {/* <BrowserRouter> */}
    <Footer title="Text Converter"/>
    <About/>

    
 {/* <Routes> */}

  {/* <Route path="/" element={<Body showAllert={showAllert}/>} /> */}
  {/* <Route path='/'>
<Body showAllert={showAllert}/>
    
    </Route>  */}
    
  {/* <Route path='/about'>
<About/>
    
    </Route>  */}

{/* </Routes> */}
{/* </BrowserRouter> */}
   </>
  );
}


export default App;
