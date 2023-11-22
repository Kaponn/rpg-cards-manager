import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { randomId } from '@mui/x-data-grid-generator'

export const equipmentRows: GridRowsProp = [
  {
    id: randomId(),
    przedmiot: 'Kaganek',
    obc: 20,
    opis: 'Zwykła miseczka z olejkiem i zanurzonym w nim knotem',
  },
]

export const equipmentColumns: GridColDef[] = [
  { field: 'przedmiot', headerName: 'Przedmiot', width: 120, editable: true },
  {
    field: 'obc',
    headerName: 'Obc.',
    width: 80,
    align: 'left',
    headerAlign: 'left',
    type: 'number',
    editable: true,
  },
  { field: 'opis', headerName: 'Opis', width: 220, editable: true },
]
