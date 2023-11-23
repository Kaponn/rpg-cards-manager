import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

export const equipmentRows: GridRowsProp = [
  {
    id: randomId(),
    item: 'Kaganek',
    weight: 20,
    desc: 'Zwykła miseczka z olejkiem i zanurzonym w nim knotem',
  },
];

export const equipmentColumns: GridColDef[] = [
  { field: 'item', headerName: 'Przedmiot', width: 120, editable: true },
  {
    field: 'weight',
    headerName: 'Obc.',
    width: 80,
    align: 'left',
    headerAlign: 'left',
    type: 'number',
    editable: true,
  },
  { field: 'desc', headerName: 'Opis', width: 220, editable: true },
];
