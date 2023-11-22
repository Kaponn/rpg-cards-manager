import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { randomId } from '@mui/x-data-grid-generator'

export const skillsRows: GridRowsProp = [
  {
    id: randomId(),
    umiejetnosc: 'Spostrzegawczość',
    wykupione: true,
    upgrade: false,
    secondUpgrade: false,
    pokrewne: '',
  },
]

export const skillsColumns: GridColDef[] = [
  {
    field: 'umiejetnosc',
    headerName: 'Umiejętność',
    width: 150,
    editable: true,
  },
  {
    field: 'wykupione',
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
    field: 'pokrewne',
    headerName: 'Zdolności pokrewne',
    width: 150,
    editable: true,
  },
]
