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
import { ProfessionSelect } from './components/ProfessionSelect';

export const HeroCreate = () => {
  const [race, setRace] = useState('');

  const handleRaceSelect = (event: SelectChangeEvent<string>) => {
    setRace(event.target.value);
  };

  const sendDataToParent = () => {};

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
          <DiceRollInput
            label="WW"
            diceValue={10}
            numOfRolls={2}
            sendDataToParent={() => sendDataToParent()}
          />
          <DiceRollInput
            label="US"
            diceValue={10}
            numOfRolls={2}
            sendDataToParent={() => sendDataToParent()}
          />
          <DiceRollInput
            label="K"
            diceValue={10}
            numOfRolls={2}
            sendDataToParent={() => sendDataToParent()}
          />
          <DiceRollInput
            label="Odp"
            diceValue={10}
            numOfRolls={2}
            sendDataToParent={() => sendDataToParent()}
          />
          <DiceRollInput
            label="Zr"
            diceValue={10}
            numOfRolls={2}
            sendDataToParent={() => sendDataToParent()}
          />
          <DiceRollInput
            label="Int"
            diceValue={10}
            numOfRolls={2}
            sendDataToParent={() => sendDataToParent()}
          />
          <DiceRollInput
            label="Sw"
            diceValue={10}
            numOfRolls={2}
            sendDataToParent={() => sendDataToParent()}
          />
          <DiceRollInput
            label="Ogd"
            diceValue={10}
            numOfRolls={2}
            sendDataToParent={() => sendDataToParent()}
          />
          <DiceRollInput
            label="Żyw"
            diceValue={10}
            numOfRolls={1}
            sendDataToParent={() => sendDataToParent()}
          />
          <DiceRollInput
            label="PP"
            diceValue={10}
            numOfRolls={1}
            sendDataToParent={() => sendDataToParent()}
          />
          {(race === 'human' || race === 'halfling') && (
            <DiceRollInput
              label="Losowa zdolność"
              diceValue={100}
              numOfRolls={1}
              sendDataToParent={() => sendDataToParent()}
            />
          )}
        </Grid>
        <ProfessionSelect />
      </FormControl>
    </Box>
  );
};
