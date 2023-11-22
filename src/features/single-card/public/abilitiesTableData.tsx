import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { randomId } from '@mui/x-data-grid-generator'

export const abilitiesColumns: GridColDef[] = [
  { field: 'zdolnosc', headerName: 'Zdolność', width: 180, editable: true },
  { field: 'opis', headerName: 'Opis', width: 220, editable: true },
]

export const abilitiesRows: GridRowsProp = [
  {
    id: randomId(),
    zdolnosc: 'Krzepki',
    opis: 'Krzepa zwiększona +5',
  },
]
