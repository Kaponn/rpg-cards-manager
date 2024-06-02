export interface HeroInfo {
  name: string;
  race: string;
  previousProfession: string;
  currentProfession: string;
}

export interface HeroBio {
  age: number;
  gender: string;
  eyeColor: string;
  hairColor: string;
  weight: number;
  height: number;
  starSign: string;
  siblings: string;
  birthPlace: string;
  specialSigns: string;
}

export interface Player {
  name: string;
  gameMaster: string;
  campaign: string;
  campaignYear: number;
}

export interface ExpPoints {
  currentPoints: number;
  allPoints: number;
}

export interface FightMovement {
  movement: number;
  charge: number;
  run: number;
}

export interface SimpleArmor {
  name: string;
  type: string;
  healthPoints: number;
}

export interface Gold {
  gold: number;
  silver: number;
  copper: number;
}

export interface Attributes {
  starterMain: number;
  devMain: number;
  currentMain: number;
}

export interface AdvancedArmor {
  type: string;
  weight: number;
  location: string;
  healthPoints: number;
}

export interface Weapons {
  name: string;
  weight: number;
  category: string;
  strength: number;
  range: number;
  reload: string;
  attributes: string;
}

export interface Abilities {
  ability: string;
  description: string;
}

export interface Skills {
  skill: string;
  bought: boolean;
  plus10: boolean;
  plus20: boolean;
  relatedAbilities: string;
}

export interface Equipment {
  item: string;
  weight: number;
  description: string;
}

export interface Hero {
  id: number;
  heroInfo: HeroInfo;
  heroBio: HeroBio;
  player: Player;
  expPoints: ExpPoints;
  fightMovement: FightMovement;
  simpleArmor: SimpleArmor;
  gold: Gold;
  attributes: Attributes[];
  advancedArmor: AdvancedArmor[];
  weapons: Weapons[];
  abilities: Abilities[];
  skills: Skills[];
  equipment: Equipment[];
}
