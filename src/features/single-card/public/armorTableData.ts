import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

export const armorRows: GridRowsProp = [
  {
    id: randomId(),
    type: 'Zbroja skórzana',
    weight: 50,
    location: 'Korpus, ręce',
    hp: 1,
  },
];

export const armorColumns: GridColDef[] = [
  { field: 'type', headerName: 'Typ pancerza', width: 150, editable: true },
  {
    field: 'weight',
    headerName: 'Obc.',
    width: 80,
    align: 'left',
    headerAlign: 'left',
    type: 'number',
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Lokacja ciała',
    width: 100,
    editable: true,
  },
  { field: 'hp', headerName: 'PZ', width: 80, editable: true },
];
