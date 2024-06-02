import React from 'react';
import './App.css';
import { SingleCard } from './features/single-card/SingleCard';
import { MainMenu } from './features/main-menu/MainMenu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeroCreate } from './features/hero-create/HeroCreate';
import AllCards from './features/all-cards/AllCards';
import { SignIn } from './features/login-page/SignIn';
import { SignUp } from './features/login-page/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<MainMenu />} />
        <Route path="/all-cards" element={<AllCards />} />
        <Route path="/hero-create" element={<HeroCreate />} />
        <Route path="/single-card/:id" element={<SingleCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
