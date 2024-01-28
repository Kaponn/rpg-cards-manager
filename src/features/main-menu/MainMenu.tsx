import { Button, ButtonGroup, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ButtonGroup variant="text">
        <Button
          fullWidth
          style={{ padding: '5rem' }}
          onClick={() => navigate('../hero-create')}
        >
          Stwórz postać
        </Button>
        <Button
          fullWidth
          style={{ padding: '5rem' }}
          onClick={() => navigate('../all-cards')}
        >
          Zapisane karty
        </Button>
      </ButtonGroup>
    </Container>
  );
};
