import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { useState } from 'react';

export const ComponentsChecklist = () => {
  const [showHeroBio, setShowHeroBio] = useState(true);
  const [showHeroInfo, setShowHeroInfo] = useState(true);
  const [showPlayer, setShowPlayer] = useState(true);
  const [showSimpleArmor, setShowSimpleArmor] = useState(true);
  const [showGold, setShowGold] = useState(true);
  const [showExpPoints, setShowExpPoints] = useState(true);
  const [showFightMovement, setShowFightMovement] = useState(true);
  const [showAdvancedArmor, setShowAdvancedArmor] = useState(true);
  const [showEquipment, setShowEquipment] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showWeapons, setShowWeapons] = useState(true);
  const [showAbilities, setShowAbilities] = useState(true);
  const [showMainAttributes, setShowMainAttributes] = useState(true);
  const [showSecondaryAttributes, setShowSecondaryAttributes] = useState(true);

  const checklistJsx = (
    <Grid container justifyContent="center">
      <FormControlLabel
        control={
          <Checkbox
            checked={showHeroInfo}
            onChange={() => setShowHeroInfo(!showHeroInfo)}
          />
        }
        label="Bohater"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showHeroBio}
            onChange={() => setShowHeroBio(!showHeroBio)}
          />
        }
        label="Opis bohatera"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showPlayer}
            onChange={() => setShowPlayer(!showPlayer)}
          />
        }
        label="Gracz"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showExpPoints}
            onChange={() => setShowExpPoints(!showExpPoints)}
          />
        }
        label="Punkty Doświadczenia"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showFightMovement}
            onChange={() => setShowFightMovement(!showFightMovement)}
          />
        }
        label="Ruch w walce"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showMainAttributes}
            onChange={() => setShowMainAttributes(!showMainAttributes)}
          />
        }
        label="Cechy główne"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showSecondaryAttributes}
            onChange={() =>
              setShowSecondaryAttributes(!showSecondaryAttributes)
            }
          />
        }
        label="Cechy poboczne"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showSimpleArmor}
            onChange={() => setShowSimpleArmor(!showSimpleArmor)}
          />
        }
        label="Opancerzenie proste"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showAdvancedArmor}
            onChange={() => setShowAdvancedArmor(!showAdvancedArmor)}
          />
        }
        label="Opancerzenie złożone"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showWeapons}
            onChange={() => setShowWeapons(!showWeapons)}
          />
        }
        label="Bronie"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showAbilities}
            onChange={() => setShowAbilities(!showAbilities)}
          />
        }
        label="Zdolności"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showSkills}
            onChange={() => setShowSkills(!showSkills)}
          />
        }
        label="Umiejętności"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showEquipment}
            onChange={() => setShowEquipment(!showEquipment)}
          />
        }
        label="Wyposażenie"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={showGold}
            onChange={() => setShowGold(!showGold)}
          />
        }
        label="Pieniądze"
      />
    </Grid>
  );

  return {
    checklistJsx,
    showHeroBio,
    showHeroInfo,
    showPlayer,
    showSimpleArmor,
    showGold,
    showExpPoints,
    showFightMovement,
    showAdvancedArmor,
    showEquipment,
    showSkills,
    showWeapons,
    showAbilities,
    showMainAttributes,
    showSecondaryAttributes,
  };
};
