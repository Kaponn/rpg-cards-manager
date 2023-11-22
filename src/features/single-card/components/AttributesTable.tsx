import { Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid"
import { mainColumns, mainRows, secondaryColumns, secondaryRows } from "../public/attributesTableData";

export const AttributesTable = () => {
  return (
    <Container>
      <h4>Zdolności</h4>
      <DataGrid
        rows={mainRows}
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
        rows={secondaryRows}
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
} 
