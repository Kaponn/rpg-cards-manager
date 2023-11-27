import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { ProfessionSelect } from './components/ProfessionSelect';
import { AttributesRolls } from './components/AttributesRolls';
import { PhysicalAttributesRolls } from './components/PhysicalAttributesRolls';
import { FamilyRolls } from './components/FamilyRolls';

export const HeroCreate = () => {
  const [race, setRace] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [diceResults, setDiceResults] = useState<{ [key: string]: string }>({});
  const [isAnyProfessionActive, setIsAnyProfessionActive] = useState(false);
  const [areInputsValid, setAreInputsValid] = useState(true);

  const validationTable: boolean[] = []

  const validateInputs = () => {
    for (let input of validationTable) {
      if (input === false) {
        return false
      } else {
        continue
      }
    }
    return true
  }

  const isCreateCharacterDisabled = !selectedProfession || !isAnyProfessionActive;

  const handleRaceSelect = (event: SelectChangeEvent<string>) => {
    setRace(event.target.value);
    setSelectedProfession('')
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

  const handleSubmit = () => {
    setAreInputsValid(validateInputs())
    
    if (areInputsValid) sendDataToParent()
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
        <AttributesRolls race={race} sendDataToParent={sendDataToParent} setDiceResults={setDiceResults} validationTable={validationTable}/>
        <ProfessionSelect race={race} updateSelectedProfession={updateSelectedProfession} setIsAnyProfessionActive={setIsAnyProfessionActive} />
        <PhysicalAttributesRolls sendDataToParent={sendDataToParent} setDiceResults={setDiceResults} validationTable={validationTable}/>
        <FamilyRolls sendDataToParent={sendDataToParent} setDiceResults={setDiceResults} validationTable={validationTable}/>
        {!areInputsValid && <Alert severity='error'>Wprowadź poprawne rzuty kością!</Alert>}
        <Button disabled={isCreateCharacterDisabled} variant="contained" onClick={() => handleSubmit()}>Stwórz postać</Button>
      </FormControl>
    </Box>
  );
};
