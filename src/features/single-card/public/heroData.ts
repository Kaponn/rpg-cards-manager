import { Hero } from '../../hero/Hero';

export type HeroData = {
  heroInfo?: { label?: string; value?: string }[];
  heroBio?: (
    | { label?: string; value?: number }
    | { label?: string; value?: string }
  )[];
  player?: (
    | { label?: string; value?: string }
    | { label?: string; value?: number }
  )[];
  expPoints?: (
    | { label?: string; value?: string }
    | { label?: string; value?: number }
  )[];
  fightMovement?: (
    | { label?: string; value?: string }
    | { label?: string; value?: number }
  )[];
  simpleArmor?: (
    | { label?: string; value?: string }
    | { label?: string; value?: number }
  )[];
  gold?: (
    | { label?: string; value?: string }
    | { label?: string; value?: number }
  )[];
  abilities?: { ability?: string; desc?: string }[];
  advancedArmor?: {
    type?: string;
    weight?: number;
    location?: string;
    hp?: number;
  }[];
  equipment?: { item?: string; weight?: number; desc?: string }[];
  skills?: {
    skill?: string;
    bought?: boolean;
    plus10?: boolean;
    plus20?: boolean;
    related?: string;
  }[];
  weapons?: {
    weapon?: string;
    weight?: number;
    category?: string;
    power?: number;
    range?: number;
    reload?: number;
    traits?: string;
  }[];
  mainAttributes?: {
    id?: number;
    header?: string;
    melee?: number;
    ranged?: number;
    sturdiness?: number;
    endurance?: number;
    agility?: number;
    intelligence?: number;
    willPower?: number;
    refinement?: number;
  }[];
  secondaryAttributes?: {
    id?: number;
    header?: string;
    attacks?: number;
    wounds?: number;
    strength?: number;
    stamina?: number;
    speed?: number;
    magic?: number;
    insanity?: number;
    fate?: number;
  }[];
};

// export type HeroData = {
//   id: number;
//   heroInfo: {
//     id: number;
//     name: string;
//     race: string;
//     previousProfession: string;
//     currentProfession: string;
//   };
//   heroBio: {
//     id: number;
//     age: number;
//     gender: string;
//     eyeColor: string;
//     hairColor: string;
//     weight: number;
//     height: number;
//     starSign: string | null;
//     siblings: number;
//     birthPlace: string;
//     specialSigns: string;
//   };
//   player: {
//     id: number;
//     name: string;
//     gameMaster: string;
//     campaign: string;
//     campaignYear: number;
//   };
//   expPoints: {
//     id: number;
//     currentPoints: number;
//     allPoints: number;
//   };
//   fightMovement: {
//     id: number;
//     movement: number;
//     charge: number;
//     run: number;
//   };
//   simpleArmor: {
//     id: number;
//     name: string;
//     type: string;
//     healthPoints: number;
//   };
//   gold: {
//     id: number;
//     gold: number;
//     silver: number;
//     copper: number;
//   };
//   attributes: {
//     id: number;
//     starterMain: number;
//     devMain: number;
//     currentMain: number;
//   }[];
//   advancedArmor: {
//     id: number;
//     type: string;
//     weight: number;
//     location: string;
//     healthPoints: number;
//   }[];
//   weapons: {
//     id: number;
//     name: string;
//     weight: number;
//     category: string;
//     strength: number;
//     range: number;
//     reload: string;
//     attributes: string;
//   }[];
//   abilities: {
//     id: number;
//     ability: string;
//     desc: string;
//   }[];
//   skills: {
//     id: number;
//     skill: string;
//     bought: boolean;
//     plus10: boolean;
//     plus20: boolean;
//     relatedAbilities: string | null;
//   }[];
//   equipment: {
//     id: number;
//     item: string;
//     weight: number;
//     description: string;
//   }[];
// };

export const getHeroData = (hero: Hero) => {
  const heroInfo = [
    { label: 'name', value: hero?.heroInfo?.name },
    { label: 'race', value: hero?.heroInfo?.race },
    { label: 'previousProfession', value: hero?.heroInfo?.previousProfession },
    { label: 'currentProfession', value: hero?.heroInfo?.currentProfession },
  ];

  const heroBio = [
    { label: 'age', value: hero?.heroBio?.age },
    { label: 'gender', value: hero?.heroBio?.gender },
    { label: 'eyeColor', value: hero?.heroBio?.eyeColor },
    { label: 'hairColor', value: hero?.heroBio?.hairColor },
    { label: 'weight', value: hero?.heroBio?.weight },
    { label: 'height', value: hero?.heroBio?.height },
    { label: 'starSign', value: hero?.heroBio?.starSign },
    { label: 'siblings', value: hero?.heroBio?.siblings },
    { label: 'birthPlace', value: hero?.heroBio?.birthPlace },
    { label: 'specialSigns', value: hero?.heroBio?.specialSigns },
  ];

  const player = [
    { label: 'name', value: hero?.player?.name },
    { label: 'gameMaster', value: hero?.player?.gameMaster },
    { label: 'campaign', value: hero?.player?.campaign },
    { label: 'campaignYear', value: hero?.player?.campaignYear },
  ];

  const expPoints = [
    { label: 'currentPoints', value: hero?.expPoints?.currentPoints },
    { label: 'allPoints', value: hero?.expPoints?.allPoints },
  ];

  const fightMovement = [
    { label: 'movement', value: hero?.fightMovement?.movement },
    { label: 'charge', value: hero?.fightMovement?.charge },
    { label: 'run', value: hero?.fightMovement?.run },
  ];

  const simpleArmor = [
    { label: 'name', value: hero?.simpleArmor?.name },
    { label: 'type', value: hero?.simpleArmor?.type },
    { label: 'healthPoints', value: hero?.simpleArmor?.healthPoints },
  ];

  const gold = [
    { label: 'gold', value: hero?.gold?.gold },
    { label: 'silver', value: hero?.gold?.silver },
    { label: 'copper', value: hero?.gold?.copper },
  ];

  const abilities = hero?.abilities?.map((ability) => ({
    ability: ability?.ability,
    desc: ability?.description,
  }));

  const advancedArmor = hero?.advancedArmor?.map((armor) => ({
    type: armor?.type,
    weight: armor?.weight,
    location: armor?.location,
    hp: armor?.healthPoints,
  }));

  const equipment = hero?.equipment?.map((item) => ({
    item: item?.item,
    weight: item?.weight,
    desc: item?.description,
  }));

  const skills = hero?.skills?.map((skill) => ({
    skill: skill?.skill,
    bought: skill?.bought,
    plus10: skill?.plus10,
    plus20: skill?.plus20,
    related: skill?.relatedAbilities,
  }));

  const weapons = hero?.weapons?.map((weapon) => ({
    weapon: weapon?.name,
    weight: weapon?.weight,
    category: weapon?.category,
    power: weapon?.strength,
    range: weapon?.range,
    reload: weapon?.reload,
    traits: weapon?.attributes,
  }));

  const mainAttributesArray = hero?.attributes?.slice(0, 8);
  const secondaryAttributesArray = hero?.attributes?.slice(8, 16);

  const mainAttributes = [
    {
      id: 1,
      header: 'Początkowa',
      melee: mainAttributesArray[0]?.starterMain,
      ranged: mainAttributesArray[1]?.starterMain,
      sturdiness: mainAttributesArray[2]?.starterMain,
      endurance: mainAttributesArray[3]?.starterMain,
      agility: mainAttributesArray[4]?.starterMain,
      intelligence: mainAttributesArray[5]?.starterMain,
      willPower: mainAttributesArray[6]?.starterMain,
      refinement: mainAttributesArray[7]?.starterMain,
    },
    {
      id: 2,
      header: 'Schemat Rozwoju',
      melee: mainAttributesArray[0]?.devMain,
      ranged: mainAttributesArray[1]?.devMain,
      sturdiness: mainAttributesArray[2]?.devMain,
      endurance: mainAttributesArray[3]?.devMain,
      agility: mainAttributesArray[4]?.devMain,
      intelligence: mainAttributesArray[5]?.devMain,
      willPower: mainAttributesArray[6]?.devMain,
      refinement: mainAttributesArray[7]?.devMain,
    },
    {
      id: 3,
      header: 'Aktualna',
      melee: mainAttributesArray[0]?.currentMain,
      ranged: mainAttributesArray[1]?.currentMain,
      sturdiness: mainAttributesArray[2]?.currentMain,
      endurance: mainAttributesArray[3]?.currentMain,
      agility: mainAttributesArray[4]?.currentMain,
      intelligence: mainAttributesArray[5]?.currentMain,
      willPower: mainAttributesArray[6]?.currentMain,
      refinement: mainAttributesArray[7]?.currentMain,
    },
  ];

  const secondaryAttributes = [
    {
      id: 1,
      header: 'Początkowa',
      attacks: secondaryAttributesArray[0]?.starterMain,
      wounds: secondaryAttributesArray[1]?.starterMain,
      strength: secondaryAttributesArray[2]?.starterMain,
      stamina: secondaryAttributesArray[3]?.starterMain,
      speed: secondaryAttributesArray[4]?.starterMain,
      magic: secondaryAttributesArray[5]?.starterMain,
      insanity: secondaryAttributesArray[6]?.starterMain,
      fate: secondaryAttributesArray[7]?.starterMain,
    },
    {
      id: 2,
      header: 'Schemat Rozwoju',
      attacks: secondaryAttributesArray[0]?.devMain,
      wounds: secondaryAttributesArray[1]?.devMain,
      strength: secondaryAttributesArray[2]?.devMain,
      stamina: secondaryAttributesArray[3]?.devMain,
      speed: secondaryAttributesArray[4]?.devMain,
      magic: secondaryAttributesArray[5]?.devMain,
      insanity: secondaryAttributesArray[6]?.devMain,
      fate: secondaryAttributesArray[7]?.devMain,
    },
    {
      id: 3,
      header: 'Aktualna',
      attacks: secondaryAttributesArray[0]?.currentMain,
      wounds: secondaryAttributesArray[1]?.currentMain,
      strength: secondaryAttributesArray[2]?.currentMain,
      stamina: secondaryAttributesArray[3]?.currentMain,
      speed: secondaryAttributesArray[4]?.currentMain,
      magic: secondaryAttributesArray[5]?.currentMain,
      insanity: secondaryAttributesArray[6]?.currentMain,
      fate: secondaryAttributesArray[7]?.currentMain,
    },
  ];

  // const mainAttributes = [
  //   {
  //     id: 1,
  //     header: 'Początkowa',
  //     melee: 0,
  //     ranged: 0,
  //     sturdiness: 0,
  //     endurance: 0,
  //     agility: 0,
  //     intelligence: 0,
  //     willPower: 0,
  //     refinement: 0,
  //   },
  //   {
  //     id: 2,
  //     header: 'Schemat Rozwoju',
  //     melee: 0,
  //     ranged: 0,
  //     sturdiness: 0,
  //     endurance: 0,
  //     agility: 0,
  //     intelligence: 0,
  //     willPower: 0,
  //     refinement: 0,
  //   },
  //   {
  //     id: 3,
  //     header: 'Aktualna',
  //     melee: 0,
  //     ranged: 0,
  //     sturdiness: 0,
  //     endurance: 0,
  //     agility: 0,
  //     intelligence: 0,
  //     willPower: 0,
  //     refinement: 0,
  //   },
  // ];

  // const secondaryAttributes = [
  //   {
  //     id: 1,
  //     header: 'Początkowa',
  //     attacks: 0,
  //     wounds: 0,
  //     strength: 0,
  //     stamina: 0,
  //     speed: 0,
  //     magic: 0,
  //     insanity: 0,
  //     fate: 0,
  //   },
  //   {
  //     id: 2,
  //     header: 'Schemat Rozwoju',
  //     attacks: 0,
  //     wounds: 0,
  //     strength: 0,
  //     stamina: 0,
  //     speed: 0,
  //     magic: 0,
  //     insanity: 0,
  //     fate: 0,
  //   },
  //   {
  //     id: 3,
  //     header: 'Aktualna',
  //     attacks: 0,
  //     wounds: 0,
  //     strength: 0,
  //     stamina: 0,
  //     speed: 0,
  //     magic: 0,
  //     insanity: 0,
  //     fate: 0,
  //   },
  // ];

  return {
    heroInfo,
    heroBio,
    player,
    expPoints,
    fightMovement,
    simpleArmor,
    gold,
    abilities,
    advancedArmor,
    equipment,
    skills,
    weapons,
    mainAttributes,
    secondaryAttributes,
  };
};
