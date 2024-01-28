import { IntRange } from './IntRange';
import { Profession } from './Profession';

const Acolyte = new Profession('acolyte', 'Akolita', [
  new IntRange(1, 2),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Outlaw = new Profession('outlaw', 'Banita', [
  new IntRange(3, 4),
  new IntRange(1, 5),
  new IntRange(1, 3),
  new IntRange(1, 3),
]);
const Berserk = new Profession('berserk', 'Berseker z Norski', [
  new IntRange(5, 5),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Peasant = new Profession('peasant', 'Chłop', [
  new IntRange(6, 7),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const CampMan = new Profession('campMan', 'Ciura obozowa', [
  new IntRange(8, 9),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(4, 5),
]);
const CircusArtist = new Profession('circusArtist', 'Cyrkowiec', [
  new IntRange(10, 11),
  new IntRange(6, 10),
  new IntRange(4, 6),
  new IntRange(6, 8),
]);
const Barber = new Profession('barber', 'Cyrulik', [
  new IntRange(12, 12),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Fanatic = new Profession('fanatic', 'Fanatyk', [
  new IntRange(13, 14),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Bargeman = new Profession('bargeman', 'Flisak', [
  new IntRange(15, 16),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Squire = new Profession('squire', 'Giermek', [
  new IntRange(17, 18),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Gladiator = new Profession('gladiator', 'Gladiator', [
  new IntRange(19, 20),
  new IntRange(-9999, -9999),
  new IntRange(7, 11),
  new IntRange(-9999, -9999),
]);
const Runner = new Profession('runner', 'Goniec', [
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(12, 16),
  new IntRange(-9999, -9999),
]);
const Miner = new Profession('miner', 'Górnik', [
  new IntRange(21, 22),
  new IntRange(-9999, -9999),
  new IntRange(17, 22),
  new IntRange(-9999, -9999),
]);
const Pellar = new Profession('pellar', 'Guślarz', [
  new IntRange(23, 23),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const GraveRobber = new Profession('graveRobber', 'Hiena Cmentarna', [
  new IntRange(24, 25),
  new IntRange(-9999, -9999),
  new IntRange(23, 25),
  new IntRange(10, 14),
]);
const Fiddler = new Profession('fiddler', 'Kanciarz', [
  new IntRange(26, 27),
  new IntRange(11, 16),
  new IntRange(-9999, -9999),
  new IntRange(15, 20),
]);
const KislevCossack = new Profession('kislevCossack', 'Kozak Kislevski', [
  new IntRange(28, 28),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Woodman = new Profession('woodMan', 'Leśnik', [
  new IntRange(29, 30),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Hunter = new Profession('hunter', 'Łowca', [
  new IntRange(31, 32),
  new IntRange(17, 24),
  new IntRange(26, 29),
  new IntRange(21, 25),
]);
const TreasureHunter = new Profession('tresureHunter', 'Łowca Nagród', [
  new IntRange(33, 34),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(26, 27),
]);
const Townsman = new Profession('townsMan', 'Mieszczanin', [
  new IntRange(35, 36),
  new IntRange(-9999, -9999),
  new IntRange(30, 33),
  new IntRange(28, 29),
]);
const TollKeeper = new Profession('tollKeeper', 'Mytnik', [
  new IntRange(37, 38),
  new IntRange(-9999, -9999),
  new IntRange(34, 36),
  new IntRange(30, 31),
]);
const Mercenary = new Profession('mercenary', 'Najemnik', [
  new IntRange(39, 40),
  new IntRange(25, 29),
  new IntRange(37, 42),
  new IntRange(32, 35),
]);
const Enlistee = new Profession('enlistee', 'Ochotnik', [
  new IntRange(41, 42),
  new IntRange(-9999, -9999),
  new IntRange(43, 46),
  new IntRange(36, 40),
]);
const SecurityGuard = new Profession('securityGuard', 'Ochroniarz', [
  new IntRange(43, 44),
  new IntRange(-9999, -9999),
  new IntRange(47, 50),
  new IntRange(-9999, -9999),
]);
const Bully = new Profession('bully', 'Oprych', [
  new IntRange(45, 46),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Page = new Profession('page', 'Paź', [
  new IntRange(47, 48),
  new IntRange(30, 31),
  new IntRange(-9999, -9999),
  new IntRange(41, 42),
]);
const Inciter = new Profession('inciter', 'Podżegacz', [
  new IntRange(49, 50),
  new IntRange(-9999, -9999),
  new IntRange(51, 52),
  new IntRange(43, 45),
]);
const CorpseHijacker = new Profession('corpseHijacker', 'Porywacz Zwłok', [
  new IntRange(51, 52),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(46, 48),
]);
const Messenger = new Profession('messenger', 'Posłaniec', [
  new IntRange(53, 54),
  new IntRange(32, 37),
  new IntRange(-9999, -9999),
  new IntRange(49, 53),
]);
const Smuggler = new Profession('smuggler', 'Przemytnik', [
  new IntRange(55, 56),
  new IntRange(-9999, -9999),
  new IntRange(53, 55),
  new IntRange(54, 56),
]);
const Lookout = new Profession('lookout', 'Przepatrywacz', [
  new IntRange(57, 58),
  new IntRange(38, 43),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Carrier = new Profession('carrier', 'Przewoźnik', [
  new IntRange(59, 59),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(57, 57),
]);
const Fisherman = new Profession('fisherman', 'Rybak', [
  new IntRange(60, 61),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(58, 58),
]);
const HouseProponent = new Profession('houseProponent', 'Rzecznik Rodu', [
  new IntRange(-9999, -9999),
  new IntRange(44, 50),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Craftsman = new Profession('craftsman', 'Rzemieślnik', [
  new IntRange(62, 63),
  new IntRange(51, 57),
  new IntRange(56, 59),
  new IntRange(59, 63),
]);
const Cutthroat = new Profession('cutthroat', 'Rzezimieszek', [
  new IntRange(64, 65),
  new IntRange(-9999, -9999),
  new IntRange(60, 63),
  new IntRange(-9999, -9999),
]);
const Scribe = new Profession('scribe', 'Skryba', [
  new IntRange(66, 67),
  new IntRange(58, 63),
  new IntRange(64, 65),
  new IntRange(-9999, -9999),
]);
const Servant = new Profession('servant', 'Sługa', [
  new IntRange(68, 69),
  new IntRange(-9999, -9999),
  new IntRange(66, 67),
  new IntRange(64, 68),
]);
const Guard = new Profession('guard', 'Strażnik', [
  new IntRange(70, 71),
  new IntRange(-9999, -9999),
  new IntRange(68, 69),
  new IntRange(69, 72),
]);
const RoadGuard = new Profession('roadGuard', 'Strażnik Dróg', [
  new IntRange(72, 73),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(73, 74),
]);
const FieldGuard = new Profession('fieldGuard', 'Leśnik', [
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(75, 78),
]);
const JailGuard = new Profession('jailGuard', 'Strażnik więzienny', [
  new IntRange(74, 74),
  new IntRange(-9999, -9999),
  new IntRange(70, 73),
  new IntRange(-9999, -9999),
]);
const RatCatcher = new Profession('ratCatcher', 'Szczurołap', [
  new IntRange(75, 76),
  new IntRange(-9999, -9999),
  new IntRange(74, 77),
  new IntRange(79, 82),
]);
const EstalFencer = new Profession('estalFencer', 'Szermierz Estalijski', [
  new IntRange(77, 77),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Noble = new Profession('noble', 'Szlachcic', [
  new IntRange(78, 79),
  new IntRange(-9999, -9999),
  new IntRange(78, 79),
  new IntRange(-9999, -9999),
]);
const Garbageman = new Profession('garbageman', 'Śmieciarz', [
  new IntRange(80, 81),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(83, 83),
]);
const ShieldBearer = new Profession('shieldBearer', 'Tarczownik', [
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(80, 83),
  new IntRange(-9999, -9999),
]);
const SorcererApprentice = new Profession(
  'sorcererApprentice',
  'Uczeń Czarodzieja',
  [
    new IntRange(82, 83),
    new IntRange(64, 70),
    new IntRange(-9999, -9999),
    new IntRange(-9999, -9999),
  ]
);
const CoalMan = new Profession('coalMan', 'Węglarz', [
  new IntRange(84, 85),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(84, 86),
]);
const RollingStone = new Profession('rollingStone', 'Włóczykij', [
  new IntRange(86, 87),
  new IntRange(71, 77),
  new IntRange(-9999, -9999),
  new IntRange(87, 90),
]);
const ClanWarrior = new Profession('clanWarrior', 'Wojownik Klanowy', [
  new IntRange(-9999, -9999),
  new IntRange(78, 84),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Wagoner = new Profession('wagoner', 'Woźnica', [
  new IntRange(88, 89),
  new IntRange(-9999, -9999),
  new IntRange(84, 85),
  new IntRange(-9999, -9999),
]);
const TrollKiller = new Profession('trollKiller', 'Zabójca Trolli', [
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(86, 89),
  new IntRange(-9999, -9999),
]);
const Administrator = new Profession('administrator', 'Zarządca', [
  new IntRange(90, 90),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
]);
const Thief = new Profession('thief', 'Złodziej', [
  new IntRange(91, 92),
  new IntRange(85, 90),
  new IntRange(90, 92),
  new IntRange(91, 96),
]);
const Student = new Profession('student', 'Żak', [
  new IntRange(93, 94),
  new IntRange(91, 95),
  new IntRange(93, 94),
  new IntRange(97, 98),
]);
const Sailor = new Profession('sailor', 'Żeglarz', [
  new IntRange(95, 96),
  new IntRange(96, 100),
  new IntRange(95, 95),
  new IntRange(-9999, -9999),
]);
const Soldier = new Profession('soldier', 'Żołnierz', [
  new IntRange(97, 98),
  new IntRange(-9999, -9999),
  new IntRange(96, 99),
  new IntRange(99, 100),
]);
const SeaSoldier = new Profession('seaSoldier', 'Żołnierz Okrętowy', [
  new IntRange(99, 100),
  new IntRange(-9999, -9999),
  new IntRange(100, 100),
  new IntRange(-9999, -9999),
]);

const professions = [
  Acolyte,
  Outlaw,
  Berserk,
  Peasant,
  CampMan,
  CircusArtist,
  Barber,
  Fanatic,
  Bargeman,
  Squire,
  Gladiator,
  Runner,
  Miner,
  Pellar,
  GraveRobber,
  Fiddler,
  KislevCossack,
  Woodman,
  Hunter,
  TreasureHunter,
  Townsman,
  TollKeeper,
  Mercenary,
  Enlistee,
  SecurityGuard,
  Bully,
  Page,
  Inciter,
  CorpseHijacker,
  Messenger,
  Smuggler,
  Lookout,
  Carrier,
  Fisherman,
  HouseProponent,
  Craftsman,
  Cutthroat,
  Scribe,
  Servant,
  Guard,
  RoadGuard,
  FieldGuard,
  JailGuard,
  RatCatcher,
  EstalFencer,
  Noble,
  Garbageman,
  ShieldBearer,
  SorcererApprentice,
  CoalMan,
  RollingStone,
  ClanWarrior,
  Wagoner,
  TrollKiller,
  Administrator,
  Thief,
  Student,
  Sailor,
  Soldier,
  SeaSoldier,
];

export const calculateProfession = (race: string, roll: string) => {
  const rollToInt = parseInt(roll);

  for (const profession of professions) {
    for (let [mappedRace, range] of profession.raceToRange) {
      if (mappedRace === race) {
        if (range.isInRange(rollToInt)) {
          return { id: profession.id, name: profession.name };
        }
      }
    }
  }

  return;
};

export const calculateAttributes = (
  race: string,
  rolls: string[],
  healthPoints: string,
  fatePoints: string,
  age: string,
  eyeColor: string,
  hairColor: string,
  weight: string,
  height: string,
  starSign: string,
  siblings: string,
  birthPlace: string,
  specialSigns: string,
  name: string
) => {
  const starterAttributes: number[] = [];
  const healthPointsInt = parseInt(healthPoints);
  const fatePointsInt = parseInt(fatePoints);
  const ageInt = parseInt(age);
  const eyeColorInt = parseInt(eyeColor);
  const hairColorInt = parseInt(hairColor);
  const weightInt = parseInt(weight);
  const heightInt = parseInt(height);
  const starSignInt = parseInt(starSign);
  const siblingsInt = parseInt(siblings);
  const birthPlaceInt = parseInt(birthPlace);
  const specialSignsInt = parseInt(specialSigns);
  const nameInt = parseInt(name);
  let healthPointsResult;
  let fatePointsResult;
  let ageResult;
  let eyeColorResult;
  let hairColorResult;
  let weightResult;
  let heightResult;
  let starSignResult;
  let siblingsResult;
  let birthPlaceResult;
  let specialSignsResult;
  let nameResult;

  if (starSignInt >= 1 && starSignInt <= 12) {
    starSignResult = 'Dwa Byki';
  } else if (starSignInt >= 13 && starSignInt <= 24) {
    starSignResult = 'Rozbity Wóz';
  } else if (starSignInt >= 25 && starSignInt <= 36) {
    starSignResult = 'Vobist Ulotny';
  } else if (starSignInt >= 37 && starSignInt <= 48) {
    starSignResult = 'Gwiazda Wieczorna';
  } else if (starSignInt >= 49 && starSignInt <= 60) {
    starSignResult = 'Gwiazda Uroku';
  } else if (starSignInt >= 61 && starSignInt <= 72) {
    starSignResult = 'Tancerka';
  } else {
    starSignResult = 'Złoty Kogut';
  }

  switch (siblingsInt) {
    case 1:
      siblingsResult = 0;
      break;
    case 2:
    case 3:
      siblingsResult = 1;
      break;
    case 4:
    case 5:
      siblingsResult = 2;
      break;
    case 6:
    case 7:
      siblingsResult = 3;
      break;
    default:
      siblingsResult = 4;
      break;
  }

  if (specialSignsInt >= 1 && specialSignsInt <= 10) {
    specialSignsResult = 'Blizna';
  } else if (specialSignsInt >= 11 && specialSignsInt <= 20) {
    specialSignsResult = 'Brak palca';
  } else if (specialSignsInt >= 21 && specialSignsInt <= 30) {
    specialSignsResult = 'Brak zęba';
  } else if (specialSignsInt >= 31 && specialSignsInt <= 40) {
    specialSignsResult = 'Duy nos';
  } else if (specialSignsInt >= 41 && specialSignsInt <= 50) {
    specialSignsResult = 'Dziwny zapach ciała';
  } else if (specialSignsInt >= 51 && specialSignsInt <= 60) {
    specialSignsResult = 'Kolczyk w nosie';
  } else if (specialSignsInt >= 61 && specialSignsInt <= 70) {
    specialSignsResult = 'Kolczyk w uchu';
  } else if (specialSignsInt >= 71 && specialSignsInt <= 80) {
    specialSignsResult = 'Oczy różnego koloru';
  } else if (specialSignsInt >= 81 && specialSignsInt <= 90) {
    specialSignsResult = 'Ślady po ospie';
  } else {
    specialSignsResult = 'Tatuaż';
  }

  if (race === 'human') {
    for (let roll of rolls) {
      const fixedRoll = parseInt(roll) + 20;
      starterAttributes.push(fixedRoll);
    }
    switch (healthPointsInt) {
      case 1:
      case 2:
      case 3:
        healthPointsResult = 10;
        break;
      case 4:
      case 5:
      case 6:
        healthPointsResult = 11;
        break;
      case 7:
      case 8:
      case 9:
        healthPointsResult = 12;
        break;
      case 10:
        healthPointsResult = 13;
        break;
    }
    switch (fatePointsInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        fatePointsResult = 2;
        break;
      default:
        fatePointsResult = 3;
        break;
    }
    if (ageInt >= 0 && ageInt < 30) {
      ageResult = 20;
    } else if (ageInt >= 30 && ageInt < 60) {
      ageResult = 25;
    } else {
      ageResult = 30;
    }
    switch (eyeColorInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        eyeColorResult = 'brązowe';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        eyeColorResult = 'zielone';
        break;
      case 9:
      case 10:
        eyeColorResult = 'niebieskie';
        break;
    }
    switch (hairColorInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        hairColorResult = 'czarne';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        hairColorResult = 'brązowe';
        break;
      case 9:
      case 10:
        hairColorResult = 'blond';
        break;
    }
    switch (weightInt) {
      case 1:
      case 2:
      case 3:
        weightResult = 50;
        break;
      case 4:
      case 5:
      case 6:
        weightResult = 60;
        break;
      case 7:
      case 8:
      case 9:
        weightResult = 70;
        break;
      case 10:
        weightResult = 80;
        break;
    }
    heightResult = heightInt + 160;
    if (birthPlaceInt >= 1 && birthPlaceInt < 40) {
      birthPlaceResult = 'Averland';
    } else if (birthPlaceInt >= 40 && birthPlaceInt <= 80) {
      birthPlaceResult = 'Ostland';
    } else {
      birthPlaceResult = 'Wissenland';
    }
    if (nameInt >= 1 && nameInt < 40) {
      nameResult = 'Albrecht';
    } else if (nameInt >= 40 && nameInt <= 80) {
      nameResult = 'Magnus';
    } else {
      nameResult = 'Wolfgang';
    }
  } else if (race === 'elf') {
    for (let i = 0; i < rolls.length; i++) {
      switch (i) {
        case 1:
        case 4:
          starterAttributes.push(parseInt(rolls[i]) + 30);
          break;
        default:
          starterAttributes.push(parseInt(rolls[i]) + 20);
          break;
      }
    }
    switch (healthPointsInt) {
      case 1:
      case 2:
      case 3:
        healthPointsResult = 9;
        break;
      case 4:
      case 5:
      case 6:
        healthPointsResult = 10;
        break;
      case 7:
      case 8:
      case 9:
        healthPointsResult = 11;
        break;
      case 10:
        healthPointsResult = 12;
        break;
    }
    switch (fatePointsInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        fatePointsResult = 1;
        break;
      default:
        fatePointsResult = 2;
        break;
    }
    if (ageInt >= 0 && ageInt < 30) {
      ageResult = 60;
    } else if (ageInt >= 30 && ageInt < 60) {
      ageResult = 80;
    } else {
      ageResult = 100;
    }
    switch (eyeColorInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        eyeColorResult = 'szaroniebieskie';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        eyeColorResult = 'kasztanowe';
        break;
      case 9:
      case 10:
        eyeColorResult = 'fioletowe';
        break;
    }
    switch (hairColorInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        hairColorResult = 'srebrne';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        hairColorResult = 'miedziane';
        break;
      case 9:
      case 10:
        hairColorResult = 'jasny blond';
        break;
    }
    switch (weightInt) {
      case 1:
      case 2:
      case 3:
        weightResult = 40;
        break;
      case 4:
      case 5:
      case 6:
        weightResult = 50;
        break;
      case 7:
      case 8:
      case 9:
        weightResult = 60;
        break;
      case 10:
        weightResult = 70;
        break;
    }
    heightResult = heightInt + 170;
    if (birthPlaceInt >= 1 && birthPlaceInt < 40) {
      birthPlaceResult = 'Altdorf';
    } else if (birthPlaceInt >= 40 && birthPlaceInt <= 80) {
      birthPlaceResult = 'Las Laurelorn';
    } else {
      birthPlaceResult = 'Las Reikwald';
    }
    if (nameInt >= 1 && nameInt < 40) {
      nameResult = 'Eldillor';
    } else if (nameInt >= 40 && nameInt <= 80) {
      nameResult = 'Falandar';
    } else {
      nameResult = 'Torendil';
    }
  } else if (race === 'dwarf') {
    for (let i = 0; i < rolls.length; i++) {
      switch (i) {
        case 0:
        case 3:
          starterAttributes.push(parseInt(rolls[i]) + 30);
          break;
        case 4:
        case 7:
          starterAttributes.push(parseInt(rolls[i]) + 10);
          break;
        default:
          starterAttributes.push(parseInt(rolls[i]) + 20);
          break;
      }
    }
    switch (healthPointsInt) {
      case 1:
      case 2:
      case 3:
        healthPointsResult = 11;
        break;
      case 4:
      case 5:
      case 6:
        healthPointsResult = 12;
        break;
      case 7:
      case 8:
      case 9:
        healthPointsResult = 13;
        break;
      case 10:
        healthPointsResult = 14;
        break;
    }
    switch (fatePointsInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        fatePointsResult = 1;
        break;
      case 5:
      case 6:
      case 7:
        fatePointsResult = 2;
        break;
      default:
        fatePointsResult = 3;
        break;
    }
    if (ageInt >= 0 && ageInt < 30) {
      ageResult = 40;
    } else if (ageInt >= 30 && ageInt < 60) {
      ageResult = 50;
    } else {
      ageResult = 60;
    }
    switch (eyeColorInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        eyeColorResult = 'szare';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        eyeColorResult = 'piwne';
        break;
      case 9:
      case 10:
        eyeColorResult = 'ciemnobrązowe';
        break;
    }
    switch (hairColorInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        hairColorResult = 'popielate';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        hairColorResult = 'rude';
        break;
      case 9:
      case 10:
        hairColorResult = 'kruczoczarne';
        break;
    }
    switch (weightInt) {
      case 1:
      case 2:
      case 3:
        weightResult = 60;
        break;
      case 4:
      case 5:
      case 6:
        weightResult = 70;
        break;
      case 7:
      case 8:
      case 9:
        weightResult = 80;
        break;
      case 10:
        weightResult = 90;
        break;
    }
    heightResult = heightInt + 145;
    if (birthPlaceInt >= 1 && birthPlaceInt < 40) {
      birthPlaceResult = 'Karak Norn';
    } else if (birthPlaceInt >= 40 && birthPlaceInt <= 80) {
      birthPlaceResult = 'Karak Izor';
    } else {
      birthPlaceResult = 'Karak Hirn';
    }
    if (nameInt >= 1 && nameInt < 40) {
      nameResult = 'Bardin';
    } else if (nameInt >= 40 && nameInt <= 80) {
      nameResult = 'Grundi';
    } else {
      nameResult = 'Thingrim';
    }
  } else if (race === 'halfling') {
    for (let i = 0; i < rolls.length; i++) {
      switch (i) {
        case 1:
        case 4:
        case 7:
          starterAttributes.push(parseInt(rolls[i]) + 30);
          break;
        case 0:
        case 2:
        case 3:
          starterAttributes.push(parseInt(rolls[i]) + 10);
          break;
        default:
          starterAttributes.push(parseInt(rolls[i]) + 20);
          break;
      }
    }
    switch (healthPointsInt) {
      case 1:
      case 2:
      case 3:
        healthPointsResult = 8;
        break;
      case 4:
      case 5:
      case 6:
        healthPointsResult = 9;
        break;
      case 7:
      case 8:
      case 9:
        healthPointsResult = 10;
        break;
      case 10:
        healthPointsResult = 11;
        break;
    }
    switch (fatePointsInt) {
      case 8:
      case 9:
      case 10:
        fatePointsResult = 3;
        break;
      default:
        fatePointsResult = 2;
        break;
    }
    if (ageInt >= 0 && ageInt < 30) {
      ageResult = 25;
    } else if (ageInt >= 30 && ageInt < 60) {
      ageResult = 35;
    } else {
      ageResult = 45;
    }
    switch (eyeColorInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        eyeColorResult = 'orzechowe';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        eyeColorResult = 'jasnobrązowe';
        break;
      case 9:
      case 10:
        eyeColorResult = 'ciemnobrązowe';
        break;
    }
    switch (hairColorInt) {
      case 1:
      case 2:
      case 3:
      case 4:
        hairColorResult = 'blond';
        break;
      case 5:
      case 6:
      case 7:
      case 8:
        hairColorResult = 'rude';
        break;
      case 9:
      case 10:
        hairColorResult = 'czarne';
        break;
    }
    switch (weightInt) {
      case 1:
      case 2:
      case 3:
        weightResult = 30;
        break;
      case 4:
      case 5:
      case 6:
        weightResult = 40;
        break;
      case 7:
      case 8:
      case 9:
        weightResult = 50;
        break;
      case 10:
        weightResult = 60;
        break;
    }
    heightResult = heightInt + 110;
    birthPlaceResult = 'Kraina Zgromadzenia';
    if (nameInt >= 1 && nameInt < 40) {
      nameResult = 'Alfred';
    } else if (nameInt >= 40 && nameInt <= 80) {
      nameResult = 'Hugo';
    } else {
      nameResult = 'Ralf';
    }
  }

  return {
    starterAttributes,
    healthPointsResult,
    fatePointsResult,
    ageResult,
    eyeColorResult,
    hairColorResult,
    weightResult,
    heightResult,
    starSignResult,
    siblingsResult,
    birthPlaceResult,
    specialSignsResult,
    nameResult,
  };
};
