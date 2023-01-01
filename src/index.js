import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './index.css';
import Navbar from './components/Navbar'
import Home from './components/Home'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />

        <Route path="/home" element={<div><Navbar /><Home /></div>} />

 
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));