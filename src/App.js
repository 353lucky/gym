import './App.css';
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Sidebar from "./Components/Sidebar"


import React from "react";
import GymName from './Components/GymName';


function App() {

  return (
  <>
    <div className='App'>
    <Header/>
    <GymName />
    <Sidebar />
    </div>
    <Footer/>
  </>
  );
}

export default App;
