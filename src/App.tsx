import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Home from "./pages/Home";
import './styles/App.scss';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
