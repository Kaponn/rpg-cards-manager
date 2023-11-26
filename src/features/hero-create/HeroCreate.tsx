import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { ProfessionSelect } from './components/ProfessionSelect';
import { AttributesRolls } from './components/AttributesRolls';
import { PhysicalAttributesRolls } from './components/PhysicalAttributesRolls';
import { FamilyRolls } from './components/FamilyRolls';

export const HeroCreate = () => {
  const [race, setRace] = useState('');
  const [selectedProfession, setSelectedProfession] = useState<string>('');
  const [diceResults, setDiceResults] = useState<{ [key: string]: string }>({});

  const handleRaceSelect = (event: SelectChangeEvent<string>) => {
    setRace(event.target.value);
  };

  const updateSelectedProfession = (profession: string) => {
    setSelectedProfession(profession);
  };

  const sendDataToParent = () => {
    const dataToSend = {
      race,
      selectedProfession,
      diceResults,
    };

    console.log(dataToSend)
  }

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
        <AttributesRolls race={race} sendDataToParent={sendDataToParent} setDiceResults={setDiceResults} />
        <ProfessionSelect race={race} updateSelectedProfession={updateSelectedProfession} />
        <PhysicalAttributesRolls sendDataToParent={sendDataToParent} setDiceResults={setDiceResults}/>
        <FamilyRolls sendDataToParent={sendDataToParent} setDiceResults={setDiceResults}/>
        <Button variant="contained" onClick={() => sendDataToParent()}>Stwórz postać</Button>
      </FormControl>
    </Box>
  );
};
