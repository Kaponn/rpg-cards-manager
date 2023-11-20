import { TextField } from '@mui/material';

export const DataInput = (props: { label: String }) => {
  return (
    <div>
      <TextField
        label={props.label}
        variant="outlined"
        sx={{
          margin: '0.3rem',
        }}
      />
    </div>
  );
};
