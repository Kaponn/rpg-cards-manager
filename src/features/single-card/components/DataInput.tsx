import { TextField } from '@mui/material';

export const DataInput = (props: { label: string; value: string }) => {
  return (
    <div>
      <TextField
        label={props.label}
        variant="outlined"
        sx={{
          margin: '0.3rem',
        }}
        defaultValue={props.value}
      />
    </div>
  );
};
