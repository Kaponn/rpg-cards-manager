import { Grid } from '@mui/material';
import { ProfessionInput } from './ProfessionInput';

export const ProfessionSelect = (props: { race: string }) => {
  return (
    <div>
      <h4>Wybór profesji</h4>
      <Grid container>
        <ProfessionInput label="Rzut 1" race={props.race} />
        <ProfessionInput label="Rzut 2" race={props.race} />
        <ProfessionInput label="Rzut 3" race={props.race} />
      </Grid>
    </div>
  );
};
