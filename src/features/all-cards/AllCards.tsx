import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../hero/Hero';
import { Button } from '@mui/material';
import NewHeroButton from './components/NewHeroButton';

const AllCards = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const navigate = useNavigate();

  const fetchHeroes = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/heroes');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setHeroes(data);
    } catch (error) {
      console.error('Failed to fetch heroes:', error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  return (
    <div>
      {heroes.map((hero) => (
        <div key={hero.id}>
          <Button
            onClick={() => {
              navigate(`../single-card/${hero.id}`);
            }}
          >
            ID: {hero.id}
            {hero.heroInfo &&
              hero.heroInfo.name &&
              ` | Imię: ${hero.heroInfo.name}`}
            {hero.heroInfo &&
              hero.heroInfo.currentProfession &&
              ` | Profesja: ${hero.heroInfo.currentProfession}`}
          </Button>
        </div>
      ))}
      <NewHeroButton />
    </div>
  );
};

export default AllCards;
