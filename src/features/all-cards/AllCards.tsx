import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../hero/Hero';
import { Button } from '@mui/material';

const AllCards = () => {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await fetch('http://localhost:8080/api/heroes');
      const data = await response.json();
      setHeroes(data);
    };

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
    </div>
  );
};

export default AllCards;
