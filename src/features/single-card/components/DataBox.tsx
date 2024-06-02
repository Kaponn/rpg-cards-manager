import { Container } from '@mui/material';
import { DataInput } from './DataInput';

export const DataBox = (props: {
  header: string;
  inputs: { label: string; value: string }[];
  numOfColumns: number;
  handleChange: (value: string, label: string, index: number) => void;
}) => {
  return (
    <Container>
      <h4 className="data-header">{props.header}</h4>
      <Container sx={{ columnCount: props.numOfColumns }}>
        {props.inputs.map((input, index) => {
          return (
            <DataInput
              key={input.label}
              label={input.label}
              value={input.value}
              handleChange={(value) =>
                props.handleChange(value, input.label, index)
              }
            />
          );
        })}
      </Container>
    </Container>
  );
};
