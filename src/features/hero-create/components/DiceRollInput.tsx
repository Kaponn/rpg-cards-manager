import { Grid, IconButton, TextField } from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import { useState } from 'react';

export const DiceRollInput = (props: {
  label: String;
  diceValue: number;
  numOfRolls: number;
}) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    if (props.numOfRolls === 1) {
      setValue(Math.floor(Math.random() * props.diceValue + 1).toString());
      return;
    }

    const rolls: number[] = [];

    for (let i = 0; i < props.numOfRolls; i++) {
      rolls.push(Math.floor(Math.random() * props.diceValue + 1));
    }

    const sum = rolls.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });

    setValue(sum.toString());
  };

  return (
    <Grid item>
      <TextField
        label={props.label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        variant="outlined"
        type="number"
        sx={{
          margin: '0.3rem',
        }}
      />
      <IconButton onClick={() => handleClick()}>
        <CasinoIcon fontSize="large" />
      </IconButton>
    </Grid>
  );
};
