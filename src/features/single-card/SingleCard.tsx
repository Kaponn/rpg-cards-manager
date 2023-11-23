import { Button, Grid } from '@mui/material';
import { DataBox } from './components/DataBox';
import { AttributesTable } from './components/AttributesTable';
import EditableTable from './components/EditableTable';
import { weaponsColumns, weaponsRows } from './public/weaponsTableData';
import { abilitiesColumns, abilitiesRows } from './public/abilitiesTableData';
import './styles/SingleCard.css';
import {
  appearance,
  expPoints,
  gold,
  heroInputs,
  movementInFight,
  player,
  simpleArmor,
} from './public/tablesData';
import { armorColumns, armorRows } from './public/armorTableData';
import { skillsColumns, skillsRows } from './public/skillsTableData';
import { equipmentColumns, equipmentRows } from './public/equipmentTableData';
import { useNavigate } from 'react-router-dom';

export const SingleCard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid container justifyContent="flex-end">
        <Button variant="contained" onClick={() => navigate('../')}>
          Powrót
        </Button>
      </Grid>
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
          <DataBox header="Gracz" inputs={player} numOfColumns={1} />
        </Grid>
        <Grid item>
          <DataBox
            header="Punkty Doświadczenia"
            inputs={expPoints}
            numOfColumns={1}
          />
        </Grid>
        <Grid item>
          <DataBox
            header="Ruch w walce"
            inputs={movementInFight}
            numOfColumns={1}
          />
        </Grid>
        <Grid item>
          <AttributesTable />
        </Grid>
        <Grid item>
          <DataBox
            header="Opancerzenie proste"
            inputs={simpleArmor}
            numOfColumns={1}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={armorColumns}
            initialRows={armorRows}
            header={'Opancerzenie złożone'}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={weaponsColumns}
            initialRows={weaponsRows}
            header={'Bronie'}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={abilitiesColumns}
            initialRows={abilitiesRows}
            header={'Zdolności'}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={skillsColumns}
            initialRows={skillsRows}
            header={'Umiejętności'}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={equipmentColumns}
            initialRows={equipmentRows}
            header={'Wyposażenie'}
          />
        </Grid>
        <Grid item>
          <DataBox header="Pieniądze" inputs={gold} numOfColumns={1} />
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Button variant="contained">Zapisz</Button>
      </Grid>
    </>
  );
};
