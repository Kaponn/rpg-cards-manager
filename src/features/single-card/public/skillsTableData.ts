import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

export const skillsRows: GridRowsProp = [
  {
    id: randomId(),
    skill: 'Spostrzegawczość',
    bought: true,
    upgrade: false,
    secondUpgrade: false,
    related: '',
  },
];

export const skillsColumns: GridColDef[] = [
  {
    field: 'skill',
    headerName: 'Umiejętność',
    width: 150,
    editable: true,
  },
  {
    field: 'bought',
    headerName: 'Wykupione',
    width: 90,
    type: 'boolean',
    editable: true,
  },
  {
    field: 'upgrade',
    headerName: '+10',
    width: 90,
    type: 'boolean',
    editable: true,
  },
  {
    field: 'secondUpgrade',
    headerName: '+20',
    width: 90,
    type: 'boolean',
    editable: true,
  },
  {
    field: 'related',
    headerName: 'Zdolności pokrewne',
    width: 150,
    editable: true,
  },
];
