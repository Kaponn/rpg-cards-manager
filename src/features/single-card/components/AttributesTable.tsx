import { Container } from '@mui/material';
import { DataGrid, GridRowsProp } from '@mui/x-data-grid';
import { mainColumns, secondaryColumns } from '../public/attributesTableData';

export const AttributesTable = (props: {
  mainRows: GridRowsProp;
  secondaryRows: GridRowsProp;
}) => {
  return (
    <Container>
      <h4>Cechy</h4>
      <DataGrid
        rows={props.mainRows}
        columns={mainColumns}
        rowSelection={false}
        disableColumnFilter
        disableColumnMenu
        hideFooter
        autoHeight
        showCellVerticalBorder
        showColumnVerticalBorder
      />
      <DataGrid
        rows={props.secondaryRows}
        columns={secondaryColumns}
        rowSelection={false}
        disableColumnFilter
        disableColumnMenu
        hideFooter
        autoHeight
        showCellVerticalBorder
        showColumnVerticalBorder
      />
    </Container>
  );
};
