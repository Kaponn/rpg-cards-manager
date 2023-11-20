import { Grid } from '@mui/material';
import { DataBox } from './components/DataBox';

export const SingleCard = () => {
  const heroInputs = ['Imię', 'Rasa', 'Poprzednia profesja', 'Obecna profesja'];
  const appearance = [
    'Wiek',
    'Płeć',
    'Kolor oczu',
    'Kolor włosów',
    'Waga',
    'Wzrost',
    'Znak gwiezdny',
    'Rodzeństwo',
    'Miejsce urodzenia',
    'Znaki szczególne',
  ];

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <DataBox header="Bohater" inputs={heroInputs} numOfColumns={1} />
        </Grid>
        <Grid item>
          <DataBox
            header="Opis bohatera"
            inputs={appearance}
            numOfColumns={3}
          />
        </Grid>
      </Grid>
    </>
  );
};
