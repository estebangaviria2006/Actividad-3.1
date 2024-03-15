import React, { useState } from 'react';
import Header from './components/HeaderLogin';
import Login from './pages/login'; // Importa el componente Login
import './App.css';

function App(){
  

  return (
    <div>
      <Header />
      <div classsName ="config">

      </div>
      <Login />
    </div> 
  )
}

export default App;