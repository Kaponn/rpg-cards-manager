import { Container } from '@mui/material';
import { DataInput } from './DataInput';

export const DataBox = (props: {
  header: String;
  inputs: String[];
  numOfColumns: number;
}) => {
  return (
    <Container>
      <h4 className="data-header">{props.header}</h4>
      <Container sx={{ columnCount: props.numOfColumns }}>
        {props.inputs.map((input) => {
          return <DataInput label={input} />;
        })}
      </Container>
    </Container>
  );
};
