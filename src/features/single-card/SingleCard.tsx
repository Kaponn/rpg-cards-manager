import { Grid } from '@mui/material';
import { DataBox } from './components/DataBox';
import { AttributesTable } from './components/AttributesTable';
import EditableTable from './components/EditableTable';
import { weaponsColumns, weaponsRows } from './public/weaponsTableData';
import { abilitiesColumns, abilitiesRows } from './public/abilitiesTableData';
import './styles/SingleCard.css'
import { appearance, expPoints, heroInputs, movementInFight, player } from './public/tablesData';

export const SingleCard = () => {
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
          <DataBox
            header="Gracz"
            inputs={player}
            numOfColumns={1}
            />
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
          <EditableTable columns={weaponsColumns} initialRows={weaponsRows} header={'Bronie'}/>
        </Grid>
        <Grid item>
          <EditableTable columns={abilitiesColumns} initialRows={abilitiesRows} header={'Zdolności'}/>
        </Grid>
      </Grid>
    </>
  );
};
