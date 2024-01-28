import React from 'react';
import './App.css';
import { SingleCard } from './features/single-card/SingleCard';
import { MainMenu } from './features/main-menu/MainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeroCreate } from './features/hero-create/HeroCreate';
import AllCards from './features/all-cards/AllCards';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/all-cards" element={<AllCards />} />
        <Route path="/hero-create" element={<HeroCreate />} />
        <Route path="/single-card/:id" element={<SingleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
