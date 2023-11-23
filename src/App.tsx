import React from 'react';
import './App.css';
import { SingleCard } from './features/single-card/SingleCard';
import { MainMenu } from './features/main-menu/MainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/single-card" element={<SingleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
