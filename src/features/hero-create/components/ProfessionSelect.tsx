import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { ProfessionInput } from './ProfessionInput';

export const ProfessionSelect = (props: { race: string, updateSelectedProfession: (profession: string) => void, setIsAnyProfessionActive: (isActive: boolean) => void }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const professionsArray: string[] = []

  useEffect(() => {
    setActiveIndex(null)
  }, [props.race])

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);

    props.setIsAnyProfessionActive(true);
  
    props.updateSelectedProfession(professionsArray[index - 1]);
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
            professionsArray={professionsArray}
          />
        ))}
      </Grid>
    </div>
  );
};
