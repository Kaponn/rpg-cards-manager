import { Button, Grid } from '@mui/material';
import { DataBox } from './components/DataBox';
import { AttributesTable } from './components/AttributesTable';
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

type ParamTypes = {
  [key: string]: string;
};

export const SingleCard = () => {
  const navigate = useNavigate();
  const { id } = useParams<ParamTypes>();
  const [hero, setHero] = useState<Hero | null>(null);
  const [heroData, setHeroData] = useState<HeroData | null>(null);

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
      };

      // console.log('heroData: ' + fetchedHeroData);
      setHeroData(mappedHeroData);
      console.log('heroData: ' + mappedHeroData);
      // console.log('heroData: ' + heroData);
    };

    fetchHero();
  }, [heroData, id]);

  if (!hero) {
    return <div>Loading...</div>;
  }

  const heroInputs =
    heroData && heroData.heroInfo
      ? heroData.heroInfo.map((info) => ({
          label: info.label || '',
          value: info.value || '',
        }))
      : [];

  const appearance =
    heroData && heroData.heroBio
      ? heroData.heroBio.map((bio) => ({
          label: bio.label || '',
          value: bio.value?.toString() || '',
        }))
      : [];

  const player =
    heroData && heroData.player
      ? heroData.player.map((player) => ({
          label: player.label || '',
          value: player.value?.toString() || '',
        }))
      : [];

  const expPoints =
    heroData && heroData.expPoints
      ? heroData.expPoints.map((exp) => ({
          label: exp.label || '',
          value: exp.value?.toString() || '',
        }))
      : [];

  const movementInFight =
    heroData && heroData.fightMovement
      ? heroData.fightMovement.map((move) => ({
          label: move.label || '',
          value: move.value?.toString() || '',
        }))
      : [];

  const simpleArmor =
    heroData && heroData.simpleArmor
      ? heroData.simpleArmor.map((armor) => ({
          label: armor.label || '',
          value: armor.value?.toString() || '',
        }))
      : [];

  const gold =
    heroData && heroData.gold
      ? heroData.gold.map((gold) => ({
          label: gold.label || '',
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
          instanity: attribute.insanity || 0,
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
      <Grid container spacing={2}>
        <Grid item>
          <DataBox header="Bohater" inputs={heroInputs} numOfColumns={1} />
        </Grid>
        <Grid item>
          <DataBox
            header="Opis bohatera"
            inputs={appearance}
            numOfColumns={3}
          />
        </Grid>
        <Grid item>
          <DataBox header="Gracz" inputs={player} numOfColumns={1} />
        </Grid>
        <Grid item>
          <DataBox
            header="Punkty Doświadczenia"
            inputs={expPoints}
            numOfColumns={1}
          />
        </Grid>
        <Grid item>
          <DataBox
            header="Ruch w walce"
            inputs={movementInFight}
            numOfColumns={1}
          />
        </Grid>
        <Grid item>
          <AttributesTable
            mainRows={mainAttributesRows}
            secondaryRows={secondaryAttributesRows}
          />
        </Grid>
        <Grid item>
          <DataBox
            header="Opancerzenie proste"
            inputs={simpleArmor}
            numOfColumns={1}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={armorColumns}
            initialRows={advancedArmorRows}
            header={'Opancerzenie złożone'}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={weaponsColumns}
            initialRows={weaponsRows}
            header={'Bronie'}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={abilitiesColumns}
            initialRows={abilitiesRows}
            header={'Zdolności'}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={skillsColumns}
            initialRows={skillsRows}
            header={'Umiejętności'}
          />
        </Grid>
        <Grid item>
          <EditableTable
            columns={equipmentColumns}
            initialRows={equipmentRows}
            header={'Wyposażenie'}
          />
        </Grid>
        <Grid item>
          <DataBox header="Pieniądze" inputs={gold} numOfColumns={1} />
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end">
        <Button variant="contained">Zapisz</Button>
      </Grid>
    </>
  );
};
