import { Box, Grid, IconButton, TextField } from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';
import { ChangeEvent, useEffect, useState } from 'react';

export const DiceRollInput = (props: {
  id: string;
  label: string;
  diceValue: number;
  numOfRolls: number;
  setDiceResults: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  validationTable: boolean[]
}) => {
  const [value, setValue] = useState('0');
  const [isInputValid, setIsInputValid] = useState(false);

  useEffect(() => {
    setIsInputValid(parseInt(value) >= 1 && parseInt(value) <= (props.diceValue * props.numOfRolls) ? true : false)
    props.validationTable.push(isInputValid)
    props.setDiceResults((prevResults) => ({
      ...prevResults,
      [props.id]: value,
    }));
  }, [value, props, isInputValid]);

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  return (
    <Box>
      <Grid item>
        <TextField
          label={props.label}
          value={value}
          onChange={(e) => handleChange(e)}
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
    </Box>
  );
};
