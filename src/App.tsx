import React from 'react';
import './App.css';
import { SingleCard } from './features/single-card/SingleCard';
import { MainMenu } from './features/main-menu/MainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeroCreate } from './features/hero-create/HeroCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/single-card" element={<SingleCard />} />
        <Route path="/hero-create" element={<HeroCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
