import { Grid } from '@mui/material';
import { ProfessionInput } from './ProfessionInput';

export const ProfessionSelect = () => {
  return (
    <div>
      <h4>Wybór profesji</h4>
      <Grid container>
        <ProfessionInput label="Rzut 1" />
        <ProfessionInput label="Rzut 2" />
        <ProfessionInput label="Rzut 3" />
      </Grid>
    </div>
  );
};
