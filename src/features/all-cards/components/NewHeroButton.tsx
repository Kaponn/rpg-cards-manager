import { Button } from '@mui/material';

const NewHeroButton = () => {
  const createNewHero = async () => {
    const response = await fetch(
      'http://localhost:8080/api/heroes/createEmptyHero',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to create new hero');
    }
  };

  return (
    <Button variant="contained" color="primary" onClick={createNewHero}>
      NOWY BOHATER
    </Button>
  );
};

export default NewHeroButton;
