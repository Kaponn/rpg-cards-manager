import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { DiceRollInput } from './components/DiceRollInput';

export const HeroCreate = () => {
  const [race, setRace] = useState('');

  const handleRaceSelect = (event: SelectChangeEvent<string>) => {
    setRace(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <h3>Twój bohater</h3>
      <FormControl fullWidth>
        <InputLabel>Rasa</InputLabel>
        <Select
          id="race-select"
          value={race}
          onChange={handleRaceSelect}
          label="Rasa"
        >
          <MenuItem value={'human'}>Człowiek</MenuItem>
          <MenuItem value={'dwarf'}>Krasnolud</MenuItem>
          <MenuItem value={'elf'}>Elf</MenuItem>
          <MenuItem value={'halfling'}>Niziołek</MenuItem>
        </Select>
        <h4>Losowanie cech</h4>
        <Grid container>
          <DiceRollInput label="WW" diceValue={10} numOfRolls={2} />
          <DiceRollInput label="US" diceValue={10} numOfRolls={2} />
          <DiceRollInput label="K" diceValue={10} numOfRolls={2} />
          <DiceRollInput label="Odp" diceValue={10} numOfRolls={2} />
          <DiceRollInput label="Zr" diceValue={10} numOfRolls={2} />
          <DiceRollInput label="Int" diceValue={10} numOfRolls={2} />
          <DiceRollInput label="Sw" diceValue={10} numOfRolls={2} />
          <DiceRollInput label="Ogd" diceValue={10} numOfRolls={2} />
          <DiceRollInput label="Żyw" diceValue={10} numOfRolls={1} />
          <DiceRollInput label="PP" diceValue={10} numOfRolls={1} />
        </Grid>
      </FormControl>
    </Box>
  );
};
