import { SetStateAction, useState } from 'react';
import { DiceRollInput } from './DiceRollInput';
import { Button } from '@mui/material';

export const ProfessionInput = (props: { label: String }) => {
  const [profession, setProfession] = useState('');

  const sendDataToParent = (data: SetStateAction<string>) => {
    setProfession(data);
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
