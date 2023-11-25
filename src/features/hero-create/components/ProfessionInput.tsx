import { useState } from 'react';
import { DiceRollInput } from './DiceRollInput';
import { Button } from '@mui/material';
import { calculateProfession } from '../helpers/heroCreateHelpers';

export const ProfessionInput = (props: { label: string, race: string }) => {
  const [profession, setProfession] = useState('');

  const sendDataToParent = (roll: string) => {
    const professionResult = calculateProfession(props.race, roll)
    setProfession(professionResult)
  };

  return (
    <div>
      <DiceRollInput
        label={props.label}
        diceValue={100}
        numOfRolls={1}
        sendDataToParent={sendDataToParent}
      />
      <Button variant="outlined">{profession}</Button>
    </div>
  );
};
