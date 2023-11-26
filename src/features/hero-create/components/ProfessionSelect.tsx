import { Grid } from '@mui/material';
import { useState } from 'react';
import { ProfessionInput } from './ProfessionInput';

export const ProfessionSelect = (props: { race: string, updateSelectedProfession: (profession: string) => void }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);

    const professionContent = document.getElementById(`rzut-${index}-button`)?.textContent || '';
  
    updateProfession(professionContent);
  };

  const updateProfession = (profession: string) => {
    props.updateSelectedProfession(profession);
  };

  return (
    <div>
      <h4>Wybór profesji</h4>
      <Grid container alignItems="center" justifyContent="center">
        {[1, 2, 3].map((index) => (
          <ProfessionInput
            index={index}
            key={index}
            label={`Rzut ${index}`}
            race={props.race}
            isActive={activeIndex === index}
            onClick={() => {
              handleButtonClick(index);
            }}
            updateProfession={updateProfession}
          />
        ))}
      </Grid>
    </div>
  );
};