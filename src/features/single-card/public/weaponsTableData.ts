import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

export const weaponsRows: GridRowsProp = [
  {
    id: randomId(),
    name: 'Kusza',
    weight: 25,
    category: 'zwykła',
    power: '4',
    range: '30/60',
    reload: 'runda',
    traits: 'brak',
  },
];

export const weaponsColumns: GridColDef[] = [
  { field: 'name', headerName: 'Nazwa', width: 150, editable: true },
  {
    field: 'weight',
    headerName: 'Obc.',
    type: 'number',
    width: 80,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'category',
    headerName: 'Kategoria',
    width: 120,
    editable: true,
  },
  {
    field: 'power',
    headerName: 'Siła Broni',
    width: 120,
    editable: true,
  },
  {
    field: 'range',
    headerName: 'Zasięg',
    width: 90,
    editable: true,
  },
  {
    field: 'reload',
    headerName: 'Przeład.',
    width: 100,
    editable: true,
  },
  {
    field: 'traits',
    headerName: 'Cechy Oręża',
    width: 180,
    editable: true,
  },
];
