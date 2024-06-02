import React from 'react';
import { Button } from '@mui/material';
import { HeroData, getHeroFromHeroData } from '../public/heroData';

interface SaveButtonProps {
  id: number;
  heroData: HeroData;
}

const SaveButton: React.FC<SaveButtonProps> = ({ id, heroData }) => {
  const handleSave = async () => {
    const hero = getHeroFromHeroData(id, heroData);
    try {
      console.log('heroData: ', hero);
      const response = await fetch(`http://localhost:8080/api/heroes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hero),
      });

      if (!response.ok) {
        throw new Error('HTTP error ' + response.status);
      }

      alert('Hero data saved successfully!');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Failed to save hero data: ', error.message);
      } else {
        console.error('Failed to save hero data: ', error);
      }
    }
  };

  return (
    <Button variant="contained" onClick={handleSave}>
      Zapisz
    </Button>
  );
};

export default SaveButton;
