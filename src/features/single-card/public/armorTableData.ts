import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { randomId } from '@mui/x-data-grid-generator'

export const armorRows: GridRowsProp = [
  {
    id: randomId(),
    typ: 'Zbroja skórzana',
    obc: 50,
    lokacja: 'Korpus, ręce',
    pz: 1,
  },
]

export const armorColumns: GridColDef[] = [
  { field: 'typ', headerName: 'Typ pancerza', width: 150, editable: true },
  {
    field: 'obc',
    headerName: 'Obc.',
    width: 80,
    align: 'left',
    headerAlign: 'left',
    type: 'number',
    editable: true,
  },
  { field: 'lokacja', headerName: 'Lokacja ciała', width: 100, editable: true },
  { field: 'pz', headerName: 'PZ', width: 80, editable: true },
]
