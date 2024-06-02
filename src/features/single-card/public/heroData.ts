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
  expPoints?: { label?: string; value?: number }[];
  fightMovement?: { label?: string; value?: number }[];
  simpleArmor?: (
    | { label?: string; value?: string }
    | { label?: string; value?: number }
  )[];
  gold?: { label?: string; value?: number }[];
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

export const getHeroFromHeroData = (id: number, heroData: HeroData) => {
  const heroInfo = {
    name: heroData.heroInfo?.find((info) => info.label === 'name')?.value || '',
    race: heroData.heroInfo?.find((info) => info.label === 'race')?.value || '',
    previousProfession:
      heroData.heroInfo?.find((info) => info.label === 'previousProfession')
        ?.value || '',
    currentProfession:
      heroData.heroInfo?.find((info) => info.label === 'currentProfession')
        ?.value || '',
  };

  const heroBio = {
    age: !isNaN(
      Number(heroData.heroBio?.find((info) => info.label === 'age')?.value)
    )
      ? Number(heroData.heroBio?.find((info) => info.label === 'age')?.value)
      : 0,
    gender: String(
      heroData.heroBio?.find((info) => info.label === 'gender')?.value || ''
    ),
    eyeColor: String(
      heroData.heroBio?.find((info) => info.label === 'eyeColor')?.value || ''
    ),
    hairColor: String(
      heroData.heroBio?.find((info) => info.label === 'hairColor')?.value || ''
    ),
    weight: !isNaN(
      Number(heroData.heroBio?.find((info) => info.label === 'weight')?.value)
    )
      ? Number(heroData.heroBio?.find((info) => info.label === 'weight')?.value)
      : 0,
    height: !isNaN(
      Number(heroData.heroBio?.find((info) => info.label === 'height')?.value)
    )
      ? Number(heroData.heroBio?.find((info) => info.label === 'height')?.value)
      : 0,
    starSign: String(
      heroData.heroBio?.find((info) => info.label === 'starSign')?.value || ''
    ),
    siblings: String(
      heroData.heroBio?.find((info) => info.label === 'siblings')?.value || ''
    ),
    birthPlace: String(
      heroData.heroBio?.find((info) => info.label === 'birthPlace')?.value || ''
    ),
    specialSigns: String(
      heroData.heroBio?.find((info) => info.label === 'specialSigns')?.value ||
        ''
    ),
  };

  const player = {
    name: String(
      heroData.player?.find((info) => info.label === 'name')?.value || ''
    ),
    gameMaster: String(
      heroData.player?.find((info) => info.label === 'gameMaster')?.value || ''
    ),
    campaign: String(
      heroData.player?.find((info) => info.label === 'campaign')?.value || ''
    ),
    campaignYear: !isNaN(
      Number(
        heroData.player?.find((info) => info.label === 'campaignYear')?.value
      )
    )
      ? Number(
          heroData.player?.find((info) => info.label === 'campaignYear')?.value
        )
      : 0,
  };

  const expPoints = {
    currentPoints:
      heroData.expPoints?.find((info) => info.label === 'currentPoints')
        ?.value || 0,
    allPoints:
      heroData.expPoints?.find((info) => info.label === 'allPoints')?.value ||
      0,
  };

  const fightMovement = {
    movement:
      heroData.fightMovement?.find((info) => info.label === 'movement')
        ?.value || 0,
    charge:
      heroData.fightMovement?.find((info) => info.label === 'charge')?.value ||
      0,
    run:
      heroData.fightMovement?.find((info) => info.label === 'run')?.value || 0,
  };

  const simpleArmor = {
    name: String(
      heroData.simpleArmor?.find((info) => info.label === 'name')?.value || ''
    ),
    type: String(
      heroData.simpleArmor?.find((info) => info.label === 'type')?.value || ''
    ),
    healthPoints: !isNaN(
      Number(
        heroData.simpleArmor?.find((info) => info.label === 'healthPoints')
          ?.value
      )
    )
      ? Number(
          heroData.simpleArmor?.find((info) => info.label === 'healthPoints')
            ?.value
        )
      : 0,
  };

  const gold = {
    gold: heroData.gold?.find((info) => info.label === 'gold')?.value || 0,
    silver: heroData.gold?.find((info) => info.label === 'silver')?.value || 0,
    copper: heroData.gold?.find((info) => info.label === 'copper')?.value || 0,
  };

  const abilities = (heroData.abilities || []).map((ability) => ({
    ability: ability?.ability || '',
    description: ability?.desc || '',
  }));

  const advancedArmor = (heroData.advancedArmor || []).map((armor) => ({
    type: armor?.type || '',
    weight: armor?.weight || 0,
    location: armor?.location || '',
    healthPoints: armor?.hp || 0,
  }));

  const equipment = (heroData.equipment || []).map((item) => ({
    item: item?.item || '',
    weight: item?.weight || 0,
    description: item?.desc || '',
  }));

  const skills = (heroData.skills || []).map((skill) => ({
    skill: String(skill?.skill || ''),
    bought: skill?.bought || true,
    plus10: skill?.plus10 || false,
    plus20: skill?.plus20 || false,
    relatedAbilities: String(skill?.related || ''),
  }));

  const weapons = (heroData.weapons || []).map((weapon) => ({
    name: String(weapon.weapon || ''),
    weight: !isNaN(Number(weapon.weight)) ? Number(weapon.weight) : 0,
    category: String(weapon.category || ''),
    strength: !isNaN(Number(weapon.power)) ? Number(weapon.power) : 0,
    range: !isNaN(Number(weapon.range)) ? Number(weapon.range) : 0,
    reload: String(weapon.reload || ''),
    attributes: String(weapon.traits || ''),
  }));

  const mainAttributes = heroData.mainAttributes?.reduce(
    (acc: Record<string, any>, attr) => {
      Object.keys(attr).forEach((key) => {
        if (key !== 'id' && key !== 'header') {
          if (!acc[key]) {
            acc[key] = {
              starterMain: 0,
              devMain: 0,
              currentMain: 0,
            };
          }
          if (attr.header === 'Początkowa') {
            acc[key]!.starterMain = (attr as Record<string, any>)[key];
          } else if (attr.header === 'Schemat Rozwoju') {
            acc[key]!.devMain = (attr as Record<string, any>)[key];
          } else if (attr.header === 'Aktualna') {
            acc[key]!.currentMain = (attr as Record<string, any>)[key];
          }
        }
      });
      return acc;
    },
    {}
  );

  const secondaryAttributes = heroData.secondaryAttributes?.reduce(
    (acc: Record<string, any>, attr) => {
      Object.keys(attr).forEach((key) => {
        if (key !== 'id' && key !== 'header') {
          if (!acc[key]) {
            acc[key] = {
              starterMain: 0,
              devMain: 0,
              currentMain: 0,
            };
          }
          if (attr.header === 'Początkowa') {
            acc[key]!.starterMain = (attr as Record<string, any>)[key];
          } else if (attr.header === 'Schemat Rozwoju') {
            acc[key]!.devMain = (attr as Record<string, any>)[key];
          } else if (attr.header === 'Aktualna') {
            acc[key]!.currentMain = (attr as Record<string, any>)[key];
          }
        }
      });
      return acc;
    },
    {}
  );

  const hero: Hero = {
    id,
    heroInfo,
    heroBio,
    player,
    expPoints,
    fightMovement,
    simpleArmor,
    gold,
    attributes: [
      ...Object.values(mainAttributes || []),
      ...Object.values(secondaryAttributes || []),
    ],
    abilities,
    advancedArmor,
    equipment,
    skills,
    weapons,
  };

  console.log(hero);
  return hero;
};
