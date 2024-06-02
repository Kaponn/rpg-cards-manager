import { Button, Grid, IconButton, TextField } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import CasinoIcon from '@mui/icons-material/Casino';
import { calculateProfession } from '../helpers/heroCreateHelpers';

export const ProfessionInput = (props: {
  index: number;
  label: string;
  race: string;
  isActive: boolean;
  onClick: () => void;
  professionsArray: string[];
}) => {
  const [value, setValue] = useState('0');
  const [profession, setProfession] = useState('Wybierz rasę');

  const handleDiceClick = () => {
    const newValue = Math.floor(Math.random() * 101).toString();
    setValue(newValue);
  };

  useEffect(() => {
    if (props.race === '') setProfession('Wybierz rasę');
    if (props.race !== '' && (parseInt(value) < 1 || parseInt(value) > 100)) {
      setProfession('Niepoprawny rzut');
    }
    const professionResult = calculateProfession(props.race, value);
    if (typeof professionResult === 'object' && professionResult !== null) {
      setProfession(professionResult.name);
      if (props.professionsArray.length < 3) {
        props.professionsArray.push(professionResult.id);
      }
    }
  }, [props, value]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  const isDisabled =
    profession === 'Wybierz rasę' || profession === 'Niepoprawny rzut';

  return (
    <Grid item>
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
        <IconButton onClick={() => handleDiceClick()}>
          <CasinoIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Button
        id={`rzut-${props.index}-button`}
        variant={props.isActive ? 'contained' : 'outlined'}
        onClick={props.onClick}
        disabled={isDisabled}
      >
        {profession}
      </Button>
    </Grid>
  );
};
