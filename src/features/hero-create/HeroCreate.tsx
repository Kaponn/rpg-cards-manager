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
import { useState } from 'react';
import { ProfessionSelect } from './components/ProfessionSelect';
import { AttributesRolls } from './components/AttributesRolls';
import { PhysicalAttributesRolls } from './components/PhysicalAttributesRolls';
import { FamilyRolls } from './components/FamilyRolls';
import { calculateAttributes } from './helpers/heroCreateHelpers';
import { useNavigate } from 'react-router-dom';

export const HeroCreate = () => {
  const [race, setRace] = useState('');
  const [selectedProfession, setSelectedProfession] = useState('');
  const [diceResults, setDiceResults] = useState<{ [key: string]: string }>({});
  const [isAnyProfessionActive, setIsAnyProfessionActive] = useState(false);
  const [areInputsValid, setAreInputsValid] = useState(true);
  const navigate = useNavigate();

  const validationTable: boolean[] = [];

  const validateInputs = () => {
    for (let input of validationTable) {
      if (input === false) {
        return false;
      } else {
        continue;
      }
    }
    return true;
  };

  const isCreateCharacterDisabled =
    !selectedProfession || !isAnyProfessionActive;

  const handleRaceSelect = (event: SelectChangeEvent<string>) => {
    setRace(event.target.value);
    setSelectedProfession('');
  };

  const updateSelectedProfession = (profession: string) => {
    setSelectedProfession(profession);
  };

  const sendDataToParent = async () => {
    const order = [
      'melee',
      'ranged',
      'sturdiness',
      'endurance',
      'agility',
      'intelligence',
      'willpower',
      'refinement',
    ];

    const diceResultsArray = order.map((key) => diceResults[key]);

    const calculatedAttributes = calculateAttributes(
      race,
      diceResultsArray,
      diceResults['wounds'],
      diceResults['fate'],
      diceResults['age'],
      diceResults['eyeColor'],
      diceResults['hairColor'],
      diceResults['weight'],
      diceResults['height'],
      diceResults['starSign'],
      diceResults['siblings'],
      diceResults['birthPlace'],
      diceResults['uniqueSigns'],
      diceResults['name']
    );

    const dataToSend = {
      professionName: selectedProfession,
      starterAttributes: calculatedAttributes.starterAttributes.map(Number),
      race,
      healthPoints: Number(calculatedAttributes.healthPointsResult),
      fatePoints: Number(calculatedAttributes.fatePointsResult),
      age: Number(calculatedAttributes.ageResult),
      eyeColor: calculatedAttributes.eyeColorResult,
      hairColor: calculatedAttributes.hairColorResult,
      weight: Number(calculatedAttributes.weightResult),
      height: Number(calculatedAttributes.heightResult),
      starSign: calculatedAttributes.starSignResult,
      siblings: Number(calculatedAttributes.siblingsResult),
      birthPlace: calculatedAttributes.birthPlaceResult,
      specialSigns: calculatedAttributes.specialSignsResult,
      name: calculatedAttributes.nameResult,
    };

    console.log(JSON.stringify(dataToSend));

    const response = await fetch(
      'http://localhost:8080/api/heroes/createHeroByUserInputs',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      }
    );

    if (!response.ok) {
      console.error('Failed to create hero', response);
    } else {
      const createdHero = await response.json();
      console.log('Created hero', createdHero);
    }
  };

  const handleSubmit = () => {
    setAreInputsValid(validateInputs());

    if (areInputsValid) sendDataToParent();
    navigate('../');
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
        <AttributesRolls
          race={race}
          sendDataToParent={sendDataToParent}
          setDiceResults={setDiceResults}
          validationTable={validationTable}
        />
        <ProfessionSelect
          race={race}
          updateSelectedProfession={updateSelectedProfession}
          setIsAnyProfessionActive={setIsAnyProfessionActive}
        />
        <PhysicalAttributesRolls
          sendDataToParent={sendDataToParent}
          setDiceResults={setDiceResults}
          validationTable={validationTable}
        />
        <FamilyRolls
          sendDataToParent={sendDataToParent}
          setDiceResults={setDiceResults}
          validationTable={validationTable}
        />
        {!areInputsValid && (
          <Alert severity="error">Wprowadź poprawne rzuty kością!</Alert>
        )}
        <Button
          disabled={isCreateCharacterDisabled}
          variant="contained"
          onClick={() => handleSubmit()}
        >
          Stwórz postać
        </Button>
      </FormControl>
    </Box>
  );
};
