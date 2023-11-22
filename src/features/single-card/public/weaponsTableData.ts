import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { randomId } from '@mui/x-data-grid-generator'

export const weaponsRows: GridRowsProp = [
  {
    id: randomId(),
    nazwa: 'Kusza',
    obc: 25,
    kategoria: 'zwykła',
    sila: '4',
    zasieg: '30/60',
    przelad: 'runda',
    cechy: 'brak',
  },
]

export const weaponsColumns: GridColDef[] = [
  { field: 'nazwa', headerName: 'Nazwa', width: 150, editable: true },
  {
    field: 'obc',
    headerName: 'Obc.',
    type: 'number',
    width: 80,
    align: 'left',
    headerAlign: 'left',
    editable: true,
  },
  {
    field: 'kategoria',
    headerName: 'Kategoria',
    width: 120,
    editable: true,
  },
  {
    field: 'sila',
    headerName: 'Siła Broni',
    width: 120,
    editable: true,
  },
  {
    field: 'zasieg',
    headerName: 'Zasięg',
    width: 90,
    editable: true,
  },
  {
    field: 'przelad',
    headerName: 'Przeład.',
    width: 100,
    editable: true,
  },
  {
    field: 'cechy',
    headerName: 'Cechy Oręża',
    width: 180,
    editable: true,
  },
]
