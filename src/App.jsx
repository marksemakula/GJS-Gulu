import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GJSGulu from './pages/GJSGulu';
import GalleryPage from './pages/GalleryPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GJSGulu />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
