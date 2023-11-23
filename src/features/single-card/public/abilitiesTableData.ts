import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

export const abilitiesColumns: GridColDef[] = [
  { field: 'ability', headerName: 'Zdolność', width: 150, editable: true },
  { field: 'desc', headerName: 'Opis', width: 280, editable: true },
];

export const abilitiesRows: GridRowsProp = [
  {
    id: randomId(),
    ability: 'Krzepki',
    desc: 'Krzepa zwiększona +5',
  },
];
