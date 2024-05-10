import { useState } from 'react';
import { StrictMode } from 'react';
import ReactDOM from "react-dom";
import './App.css';



// Import Route and our components:
import {Route, Routes} from "react-router-dom";
import Currencies from './components/pages/Currencies';
import Main from './components/pages/Main';
import Price from './components/pages/Price';
import Nav from './components/Nav';

function App() {
  

  return (
    <div className='App'>
      <Nav />
      <Routes>
         {/* Wrap our App components in Route paths */}
        <Route path="/" element={ <Main /> } />
        <Route path="/currencies" element={<Currencies/>}/>
        <Route path="/price" element={<Price/>}/>

      </Routes>
    </div>
  )
}

export default App
