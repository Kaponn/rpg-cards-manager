import { Grid } from '@mui/material';
import { DataBox } from './components/DataBox';
import { AttributesTable } from './components/AttributesTable';
import EditableTable from './components/EditableTable';
import { weaponsColumns, weaponsRows } from './public/weaponsTableData';
import { abilitiesColumns, abilitiesRows } from './public/abilitiesTableData';
import './styles/SingleCard.css'

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
        <Grid item>
          <AttributesTable />
        </Grid>
        <Grid item>
          <EditableTable columns={weaponsColumns} initialRows={weaponsRows}/>
        </Grid>
        <Grid item>
          <EditableTable columns={abilitiesColumns} initialRows={abilitiesRows}/>
        </Grid>
      </Grid>
    </>
  );
};
