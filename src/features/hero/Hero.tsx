interface HeroInfo {
  name: string;
  race: string;
  previousProfession: string;
  currentProfession: string;
}

interface HeroBio {
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

interface Player {
  name: string;
  gameMaster: string;
  campaign: string;
  campaignYear: number;
}

interface ExpPoints {
  currentPoints: number;
  allPoints: number;
}

interface FightMovement {
  movement: number;
  charge: number;
  run: number;
}

interface SimpleArmor {
  name: string;
  type: string;
  healthPoints: number;
}

interface Gold {
  gold: number;
  silver: number;
  copper: number;
}

interface Attributes {
  starterMain: string;
  devMain: number;
  currentMain: number;
}

interface AdvancedArmor {
  type: string;
  weight: number;
  location: string;
  healthPoints: number;
}

interface Weapons {
  name: string;
  weight: number;
  category: string;
  strength: number;
  range: number;
  reload: string;
  attributes: string;
}

interface Abilities {
  ability: string;
  description: string;
}

interface Skills {
  skill: string;
  bought: boolean;
  plus10: boolean;
  plus20: boolean;
  relatedAbilities: string;
}

interface Equipment {
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
