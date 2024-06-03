import { Button, Grid } from '@mui/material';
import { DataBox } from './components/DataBox';
import EditableTable from './components/EditableTable';
import { weaponsColumns } from './public/weaponsTableData';
import { abilitiesColumns } from './public/abilitiesTableData';
import './styles/SingleCard.css';
import { armorColumns } from './public/armorTableData';
import { skillsColumns } from './public/skillsTableData';
import { equipmentColumns } from './public/equipmentTableData';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Hero } from '../hero/Hero';
import { HeroData, getHeroData } from './public/heroData';
import { randomId } from '@mui/x-data-grid-generator';
import SaveButton from './components/SaveButton';
import {
  heroInputsLabels,
  appearanceLabels,
  playerLabels,
  expPointsLabels,
  movementInFightLabels,
  simpleArmorLabels,
  goldLabels,
} from './public/tablesData';
import { mainColumns, secondaryColumns } from './public/attributesTableData';
import { ComponentsChecklist } from './components/ComponentsChecklist';

type ParamTypes = {
  [key: string]: string;
};

export const SingleCard = () => {
  const navigate = useNavigate();
  const { id } = useParams<ParamTypes>();
  const [hero, setHero] = useState<Hero | null>(null);
  const [heroData, setHeroData] = useState<HeroData | null>(null);
  const {
    checklistJsx,
    showAbilities,
    showAdvancedArmor,
    showEquipment,
    showExpPoints,
    showFightMovement,
    showGold,
    showHeroBio,
    showHeroInfo,
    showMainAttributes,
    showPlayer,
    showSecondaryAttributes,
    showSimpleArmor,
    showSkills,
    showWeapons,
  } = ComponentsChecklist();

  const handleDataChange = (
    value: string,
    label: string,
    section: string,
    index: number
  ) => {
    setHeroData((prevHeroData) => {
      if (!prevHeroData) return null;

      const updatedHeroData: { [key: string]: any } = { ...prevHeroData };

      if (updatedHeroData[section][index]) {
        updatedHeroData[section][index] = {
          ...updatedHeroData[section][index],
          value: value,
        };
      }

      console.log(heroData);
      return updatedHeroData;
    });
  };

  const handleRowsChange = (updatedRows: any, section: string) => {
    setHeroData((prevHeroData) => {
      const updatedHeroData: { [key: string]: any } = { ...prevHeroData };

      updatedHeroData[section] = updatedRows.map((row: any) => {
        const newRow: { [key: string]: any } = {};
        for (const key in row) {
          newRow[key] = row[key];
        }
        return newRow;
      });

      return updatedHeroData;
    });
  };

  useEffect(() => {
    const fetchHero = async () => {
      const response = await fetch(`http://localhost:8080/api/heroes/${id}`);
      const data = await response.json();
      setHero(data);
      const fetchedHeroData = getHeroData(data);
      const mappedHeroData: HeroData = {
        heroInfo: fetchedHeroData.heroInfo.map((info) => ({
          label: info.label,
          value: info.value,
        })),
        heroBio: fetchedHeroData.heroBio.map((bio) => ({
          label: bio.label,
          value:
            typeof bio.value === 'number' ? bio.value.toString() : bio.value,
        })),
        player: fetchedHeroData.player.map((player) => ({
          label: player.label,
          value:
            typeof player.value === 'number'
              ? player.value.toString()
              : player.value,
        })),
        simpleArmor: fetchedHeroData.simpleArmor.map((armor) => ({
          label: armor.label,
          value:
            typeof armor.value === 'number'
              ? armor.value.toString()
              : armor.value,
        })),
        gold: fetchedHeroData.gold.map((gold) => ({
          label: gold.label,
          value: gold.value,
        })),
        expPoints: fetchedHeroData.expPoints.map((exp) => ({
          label: exp.label,
          value: exp.value,
        })),
        fightMovement: fetchedHeroData.fightMovement.map((move) => ({
          label: move.label,
          value: move.value,
        })),
        abilities: fetchedHeroData.abilities.map((ability) => ({
          ability: ability.ability,
          desc: ability.desc,
        })),
        advancedArmor: fetchedHeroData.advancedArmor.map((armor) => ({
          type: armor.type,
          weight: armor.weight,
          location: armor.location,
          hp: armor.hp,
        })),
        equipment: fetchedHeroData.equipment.map((equipment) => ({
          item: equipment.item,
          weight: equipment.weight,
          desc: equipment.desc,
        })),
        skills: fetchedHeroData.skills.map((skill) => ({
          skill: skill.skill,
          bought: skill.bought,
          plus10: skill.plus10,
          plus20: skill.plus20,
          related: skill.related,
        })),
        weapons: fetchedHeroData.weapons.map((weapon) => ({
          weapon: weapon.weapon,
          weight: weapon.weight,
          category: weapon.category,
          power: weapon.power,
          range: weapon.range,
        })),
        mainAttributes: fetchedHeroData.mainAttributes.map((attribute) => ({
          id: attribute.id,
          header: attribute.header,
          melee:
            typeof attribute.melee === 'string'
              ? parseInt(attribute.melee, 10)
              : attribute.melee,
          ranged:
            typeof attribute.ranged === 'string'
              ? parseInt(attribute.ranged, 10)
              : attribute.ranged,
          sturdiness:
            typeof attribute.sturdiness === 'string'
              ? parseInt(attribute.sturdiness, 10)
              : attribute.sturdiness,
          endurance:
            typeof attribute.endurance === 'string'
              ? parseInt(attribute.endurance, 10)
              : attribute.endurance,
          agility:
            typeof attribute.agility === 'string'
              ? parseInt(attribute.agility, 10)
              : attribute.agility,
          intelligence:
            typeof attribute.intelligence === 'string'
              ? parseInt(attribute.intelligence, 10)
              : attribute.intelligence,
          willPower:
            typeof attribute.willPower === 'string'
              ? parseInt(attribute.willPower, 10)
              : attribute.willPower,
          refinement:
            typeof attribute.refinement === 'string'
              ? parseInt(attribute.refinement, 10)
              : attribute.refinement,
        })),
        secondaryAttributes: fetchedHeroData.secondaryAttributes.map(
          (attribute) => ({
            id: attribute.id,
            header: attribute.header,
            attacks:
              typeof attribute.attacks === 'string'
                ? parseInt(attribute.attacks, 10)
                : attribute.attacks,
            wounds:
              typeof attribute.wounds === 'string'
                ? parseInt(attribute.wounds, 10)
                : attribute.wounds,
            strength:
              typeof attribute.strength === 'string'
                ? parseInt(attribute.strength, 10)
                : attribute.strength,
            stamina:
              typeof attribute.stamina === 'string'
                ? parseInt(attribute.stamina, 10)
                : attribute.stamina,
            speed:
              typeof attribute.speed === 'string'
                ? parseInt(attribute.speed, 10)
                : attribute.speed,
            magic:
              typeof attribute.magic === 'string'
                ? parseInt(attribute.magic, 10)
                : attribute.magic,
            insanity:
              typeof attribute.insanity === 'string'
                ? parseInt(attribute.insanity, 10)
                : attribute.insanity,
            fate:
              typeof attribute.fate === 'string'
                ? parseInt(attribute.fate, 10)
                : attribute.fate,
          })
        ),
      };

      setHeroData(mappedHeroData);
    };

    fetchHero();
  }, [id]);

  if (!hero) {
    return <div>Loading...</div>;
  }

  const heroInputs =
    heroData && heroData.heroInfo
      ? heroData.heroInfo.map((info, index) => ({
          label: heroInputsLabels[index] || '',
          value: info.value || '',
        }))
      : [];

  const appearance =
    heroData && heroData.heroBio
      ? heroData.heroBio.map((bio, index) => ({
          label: appearanceLabels[index] || '',
          value: bio.value?.toString() || '',
        }))
      : [];

  const player =
    heroData && heroData.player
      ? heroData.player.map((player, index) => ({
          label: playerLabels[index] || '',
          value: player.value?.toString() || '',
        }))
      : [];

  const expPoints =
    heroData && heroData.expPoints
      ? heroData.expPoints.map((exp, index) => ({
          label: expPointsLabels[index] || '',
          value: exp.value?.toString() || '',
        }))
      : [];

  const movementInFight =
    heroData && heroData.fightMovement
      ? heroData.fightMovement.map((move, index) => ({
          label: movementInFightLabels[index] || '',
          value: move.value?.toString() || '',
        }))
      : [];

  const simpleArmor =
    heroData && heroData.simpleArmor
      ? heroData.simpleArmor.map((armor, index) => ({
          label: simpleArmorLabels[index] || '',
          value: armor.value?.toString() || '',
        }))
      : [];

  const gold =
    heroData && heroData.gold
      ? heroData.gold.map((gold, index) => ({
          label: goldLabels[index] || '',
          value: gold.value?.toString() || '',
        }))
      : [];

  const advancedArmorRows =
    heroData && heroData.advancedArmor
      ? heroData.advancedArmor.map((armor) => ({
          id: randomId(),
          type: armor.type || '',
          weight: armor.weight?.toString() || '',
          location: armor.location || '',
          hp: armor.hp?.toString() || '',
        }))
      : [];

  const weaponsRows =
    heroData && heroData.weapons
      ? heroData.weapons.map((weapon) => ({
          id: randomId(),
          weapon: weapon.weapon || '',
          weight: weapon.weight?.toString() || '',
          category: weapon.category || '',
          power: weapon.power?.toString() || '',
          range: weapon.range?.toString() || '',
        }))
      : [];

  const abilitiesRows =
    heroData && heroData.abilities
      ? heroData.abilities.map((ability) => ({
          id: randomId(),
          ability: ability.ability || '',
          desc: ability.desc || '',
        }))
      : [];

  const skillsRows =
    heroData && heroData.skills
      ? heroData.skills.map((skill) => ({
          id: randomId(),
          skill: skill.skill || '',
          bought: skill.bought?.toString() || '',
          plus10: skill.plus10?.toString() || '',
          plus20: skill.plus20?.toString() || '',
          related: skill.related || '',
        }))
      : [];

  const equipmentRows =
    heroData && heroData.equipment
      ? heroData.equipment.map((equipment) => ({
          id: randomId(),
          item: equipment.item || '',
          weight: equipment.weight?.toString() || '',
          desc: equipment.desc || '',
        }))
      : [];

  const mainAttributesRows =
    heroData && heroData.mainAttributes
      ? heroData.mainAttributes.map((attribute) => ({
          id: attribute.id,
          header: attribute.header || 0,
          melee: attribute.melee || 0,
          ranged: attribute.ranged || 0,
          sturdiness: attribute.sturdiness || 0,
          endurance: attribute.endurance || 0,
          agility: attribute.agility || 0,
          intelligence: attribute.agility || 0,
          willPower: attribute.willPower || 0,
          refinement: attribute.refinement || 0,
        }))
      : [];

  const secondaryAttributesRows =
    heroData && heroData.secondaryAttributes
      ? heroData.secondaryAttributes.map((attribute) => ({
          id: attribute.id,
          header: attribute.header || 0,
          attacks: attribute.attacks || 0,
          wounds: attribute.wounds || 0,
          strength: attribute.strength || 0,
          stamina: attribute.stamina || 0,
          speed: attribute.speed || 0,
          magic: attribute.magic || 0,
          insanity: attribute.insanity || 0,
          fate: attribute.fate || 0,
        }))
      : [];

  return (
    <>
      <Grid container justifyContent="flex-end">
        <Button variant="contained" onClick={() => navigate('../all-cards')}>
          Powrót
        </Button>
      </Grid>
      {checklistJsx}
      <Grid container spacing={2}>
        {showHeroInfo && (
          <Grid item xs={12} sm={6} md={4}>
            <DataBox
              header="Bohater"
              inputs={heroInputs}
              numOfColumns={1}
              handleChange={(value, label, index) =>
                handleDataChange(value, label, 'heroInfo', index)
              }
            />
          </Grid>
        )}
        {showHeroBio && (
          <Grid item xs={12} sm={6} md={4}>
            <DataBox
              header="Opis bohatera"
              inputs={appearance}
              numOfColumns={3}
              handleChange={(value, label, index) =>
                handleDataChange(value, label, 'heroBio', index)
              }
            />
          </Grid>
        )}
        {showPlayer && (
          <Grid item xs={12} sm={6} md={4}>
            <DataBox
              header="Gracz"
              inputs={player}
              numOfColumns={1}
              handleChange={(value, label, index) =>
                handleDataChange(value, label, 'player', index)
              }
            />
          </Grid>
        )}
        {showExpPoints && (
          <Grid item xs={12} sm={6} md={4}>
            <DataBox
              header="Punkty Doświadczenia"
              inputs={expPoints}
              numOfColumns={1}
              handleChange={(value, label, index) =>
                handleDataChange(value, label, 'expPoints', index)
              }
            />
          </Grid>
        )}
        {showFightMovement && (
          <Grid item xs={12} sm={6} md={4}>
            <DataBox
              header="Ruch w walce"
              inputs={movementInFight}
              numOfColumns={1}
              handleChange={(value, label, index) =>
                handleDataChange(value, label, 'fightMovement', index)
              }
            />
          </Grid>
        )}
        {showMainAttributes && (
          <Grid item xs={12} sm={6} md={4}>
            <EditableTable
              columns={mainColumns}
              initialRows={mainAttributesRows}
              header={'Cechy główne'}
              onRowsChange={(rows) => handleRowsChange(rows, 'mainAttributes')}
            />
          </Grid>
        )}
        {showSecondaryAttributes && (
          <Grid item xs={12} sm={6} md={4}>
            <EditableTable
              columns={secondaryColumns}
              initialRows={secondaryAttributesRows}
              header={'Cechy poboczne'}
              onRowsChange={(rows) =>
                handleRowsChange(rows, 'secondaryAttributes')
              }
            />
          </Grid>
        )}
        {showSimpleArmor && (
          <Grid item xs={12} sm={6} md={4}>
            <DataBox
              header="Opancerzenie proste"
              inputs={simpleArmor}
              numOfColumns={1}
              handleChange={(value, label, index) =>
                handleDataChange(value, label, 'simpleArmor', index)
              }
            />
          </Grid>
        )}
        {showAdvancedArmor && (
          <Grid item xs={12} sm={6} md={4}>
            <EditableTable
              columns={armorColumns}
              initialRows={advancedArmorRows}
              header={'Opancerzenie złożone'}
              onRowsChange={(rows) => handleRowsChange(rows, 'advancedArmor')}
            />
          </Grid>
        )}
        {showWeapons && (
          <Grid item xs={12} sm={6} md={4}>
            <EditableTable
              columns={weaponsColumns}
              initialRows={weaponsRows}
              header={'Bronie'}
              onRowsChange={(rows) => handleRowsChange(rows, 'weapons')}
            />
          </Grid>
        )}
        {showAbilities && (
          <Grid item xs={12} sm={6} md={4}>
            <EditableTable
              columns={abilitiesColumns}
              initialRows={abilitiesRows}
              header={'Zdolności'}
              onRowsChange={(rows) => handleRowsChange(rows, 'abilities')}
            />
          </Grid>
        )}
        {showSkills && (
          <Grid item xs={12} sm={6} md={4}>
            <EditableTable
              columns={skillsColumns}
              initialRows={skillsRows}
              header={'Umiejętności'}
              onRowsChange={(rows) => handleRowsChange(rows, 'skills')}
            />
          </Grid>
        )}
        {showEquipment && (
          <Grid item xs={12} sm={6} md={4}>
            <EditableTable
              columns={equipmentColumns}
              initialRows={equipmentRows}
              header={'Wyposażenie'}
              onRowsChange={(rows) => handleRowsChange(rows, 'equipment')}
            />
          </Grid>
        )}
        {showGold && (
          <Grid item xs={12} sm={6} md={4}>
            <DataBox
              header="Pieniądze"
              inputs={gold}
              numOfColumns={1}
              handleChange={(value, label, index) =>
                handleDataChange(value, label, 'gold', index)
              }
            />
          </Grid>
        )}
      </Grid>
      <Grid container justifyContent="flex-end">
        {id && heroData && <SaveButton id={parseInt(id)} heroData={heroData} />}
      </Grid>
    </>
  );
};
