import { TextField } from '@mui/material';

export const DataInput = (props: {
  label: string;
  value: string;
  handleChange: (value: string) => void;
}) => {
  return (
    <div>
      <TextField
        label={props.label}
        variant="outlined"
        sx={{
          margin: '0.3rem',
        }}
        defaultValue={props.value}
        onChange={(e) => {
          props.handleChange(e.target.value);
        }}
      />
    </div>
  );
};
