import { IntRange } from './IntRange'
import { Profession } from './Profession'

const Acolyte = new Profession('Akolita', [
  new IntRange(1, 2),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Outlaw = new Profession('Banita', [
  new IntRange(3, 4),
  new IntRange(1, 5),
  new IntRange(1, 3),
  new IntRange(1, 3),
])
const Berserk = new Profession('Berseker z Norski', [
  new IntRange(5, 5),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Paesant = new Profession('Chłop', [
  new IntRange(6, 7),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const CampMan = new Profession('Ciura obozowa', [
  new IntRange(8, 9),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(4, 5),
])
const CircusArtist = new Profession('Cyrkowiec', [
  new IntRange(10, 11),
  new IntRange(6, 10),
  new IntRange(4, 6),
  new IntRange(6, 8),
])
const Barber = new Profession('Cyrulik', [
  new IntRange(12, 12),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Fanatic = new Profession('Fanatyk', [
  new IntRange(13, 14),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Bargeman = new Profession('Flisak', [
  new IntRange(15, 16),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Squire = new Profession('Giermek', [
  new IntRange(17, 18),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Gladiator = new Profession('Gladiator', [
  new IntRange(19, 20),
  new IntRange(-9999, -9999),
  new IntRange(7, 11),
  new IntRange(-9999, -9999),
])
const Runner = new Profession('Goniec', [
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(12, 16),
  new IntRange(-9999, -9999),
])
const Miner = new Profession('Górnik', [
  new IntRange(21, 22),
  new IntRange(-9999, -9999),
  new IntRange(17, 22),
  new IntRange(-9999, -9999),
])
const Pellar = new Profession('Guślarz', [
  new IntRange(23, 23),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const GraveRobber = new Profession('Hiena Cmentarna', [
  new IntRange(24, 25),
  new IntRange(-9999, -9999),
  new IntRange(23, 25),
  new IntRange(10, 14),
])
const Fiddler = new Profession('Kanciarz', [
  new IntRange(26, 27),
  new IntRange(11, 16),
  new IntRange(-9999, -9999),
  new IntRange(15, 20),
])
const KislevCossack = new Profession('Kozak Kislevski', [
  new IntRange(28, 28),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Woodman = new Profession('Leśnik', [
  new IntRange(29, 30),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Hunter = new Profession('Łowca', [
  new IntRange(31, 32),
  new IntRange(17, 24),
  new IntRange(26, 29),
  new IntRange(21, 25),
])
const TreasureHunter = new Profession('Łowca Nagród', [
  new IntRange(33, 34),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(26, 27),
])
const Townsman = new Profession('Mieszczanin', [
  new IntRange(35, 36),
  new IntRange(-9999, -9999),
  new IntRange(30, 33),
  new IntRange(28, 29),
])
const TollKeeper = new Profession('Mytnik', [
  new IntRange(37, 38),
  new IntRange(-9999, -9999),
  new IntRange(34, 36),
  new IntRange(30, 31),
])
const Mercenary = new Profession('Najemnik', [
  new IntRange(39, 40),
  new IntRange(25, 29),
  new IntRange(37, 42),
  new IntRange(32, 35),
])
const Enlistee = new Profession('Ochotnik', [
  new IntRange(41, 42),
  new IntRange(-9999, -9999),
  new IntRange(43, 46),
  new IntRange(36, 40),
])
const SecurityGuard = new Profession('Ochroniarz', [
  new IntRange(43, 44),
  new IntRange(-9999, -9999),
  new IntRange(47, 50),
  new IntRange(-9999, -9999),
])
const Bully = new Profession('Oprych', [
  new IntRange(45, 46),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Page = new Profession('Paź', [
  new IntRange(47, 48),
  new IntRange(30, 31),
  new IntRange(-9999, -9999),
  new IntRange(41, 42),
])
const Inciter = new Profession('Podżegacz', [
  new IntRange(49, 50),
  new IntRange(-9999, -9999),
  new IntRange(51, 52),
  new IntRange(43, 45),
])
const CorpseHijacker = new Profession('Porywacz Zwłok', [
  new IntRange(51, 52),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(46, 48),
])
const Messenger = new Profession('Posłaniec', [
  new IntRange(53, 54),
  new IntRange(32, 37),
  new IntRange(-9999, -9999),
  new IntRange(49, 53),
])
const Smuggler = new Profession('Przemytnik', [
  new IntRange(55, 56),
  new IntRange(-9999, -9999),
  new IntRange(53, 55),
  new IntRange(54, 56),
])
const Lookout = new Profession('Przepatrywacz', [
  new IntRange(57, 58),
  new IntRange(38, 43),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Carrier = new Profession('Przewoźnik', [
  new IntRange(59, 59),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(57, 57),
])
const Fisherman = new Profession('Rybak', [
  new IntRange(60, 61),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(58, 58),
])
const HouseProponent = new Profession('Rzecznik Rodu', [
  new IntRange(-9999, -9999),
  new IntRange(44, 50),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Craftsman = new Profession('Rzemieślnik', [
  new IntRange(62, 63),
  new IntRange(51, 57),
  new IntRange(56, 59),
  new IntRange(59, 63),
])
const Cutthroat = new Profession('Rzezimieszek', [
  new IntRange(64, 65),
  new IntRange(-9999, -9999),
  new IntRange(60, 63),
  new IntRange(-9999, -9999),
])
const Scribe = new Profession('Skryba', [
  new IntRange(66, 67),
  new IntRange(58, 63),
  new IntRange(64, 65),
  new IntRange(-9999, -9999),
])
const Servant = new Profession('Sługa', [
  new IntRange(68, 69),
  new IntRange(-9999, -9999),
  new IntRange(66, 67),
  new IntRange(64, 68),
])
const Guard = new Profession('Strażnik', [
  new IntRange(70, 71),
  new IntRange(-9999, -9999),
  new IntRange(68, 69),
  new IntRange(69, 72),
])
const RoadGuard = new Profession('Strażnik Dróg', [
  new IntRange(72, 73),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(73, 74),
])
const FieldGuard = new Profession('Leśnik', [
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(75, 78),
])
const JailGuard = new Profession('Strażnik więzienny', [
  new IntRange(74, 74),
  new IntRange(-9999, -9999),
  new IntRange(70, 73),
  new IntRange(-9999, -9999),
])
const RatCatcher = new Profession('Szczurołap', [
  new IntRange(75, 76),
  new IntRange(-9999, -9999),
  new IntRange(74, 77),
  new IntRange(79, 82),
])
const EstalFencer = new Profession('Szermierz Estalijski', [
  new IntRange(77, 77),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Noble = new Profession('Szlachcic', [
  new IntRange(78, 79),
  new IntRange(-9999, -9999),
  new IntRange(78, 79),
  new IntRange(-9999, -9999),
])
const Garbageman = new Profession('Śmieciarz', [
  new IntRange(80, 81),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(83, 83),
])
const ShieldBearer = new Profession('Tarczownik', [
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(80, 83),
  new IntRange(-9999, -9999),
])
const SorcererApprentice = new Profession('Uczeń Czarodzieja', [
  new IntRange(82, 83),
  new IntRange(64, 70),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const CoalMan = new Profession('Węglarz', [
  new IntRange(84, 85),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(84, 86),
])
const RollingStone = new Profession('Włóczykij', [
  new IntRange(86, 87),
  new IntRange(71, 77),
  new IntRange(-9999, -9999),
  new IntRange(87, 90),
])
const ClanWarrior = new Profession('Wojownik Klanowy', [
  new IntRange(-9999, -9999),
  new IntRange(78, 84),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Wagoner = new Profession('Woźnica', [
  new IntRange(88, 89),
  new IntRange(-9999, -9999),
  new IntRange(84, 85),
  new IntRange(-9999, -9999),
])
const TrollKiller = new Profession('Zabójca Trolli', [
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(86, 89),
  new IntRange(-9999, -9999),
])
const Administrator = new Profession('Zarządca', [
  new IntRange(90, 90),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
  new IntRange(-9999, -9999),
])
const Thief = new Profession('Złodziej', [
  new IntRange(91, 92),
  new IntRange(85, 90),
  new IntRange(90, 92),
  new IntRange(91, 96),
])
const Student = new Profession('Żak', [
  new IntRange(93, 94),
  new IntRange(91, 95),
  new IntRange(93, 94),
  new IntRange(97, 98),
])
const Sailor = new Profession('Żeglarz', [
  new IntRange(95, 96),
  new IntRange(96, 100),
  new IntRange(95, 95),
  new IntRange(-9999, -9999),
])
const Soldier = new Profession('Żołnierz', [
  new IntRange(97, 98),
  new IntRange(-9999, -9999),
  new IntRange(96, 99),
  new IntRange(99, 100),
])
const SeaSoldier = new Profession('Żołnierz Okrętowy', [
  new IntRange(99, 100),
  new IntRange(-9999, -9999),
  new IntRange(100, 100),
  new IntRange(-9999, -9999),
])

const professions = [
  Acolyte,
  Outlaw,
  Berserk,
  Paesant,
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
]

export const calculateProfession = (race: string, roll: string) => {
  if (race === '') return 'Wybierz rasę'

  const rollToInt = parseInt(roll)

  for (const profession of professions) {
    for (let [mappedRace, range] of profession.raceToRange) {
      if (mappedRace === race) {
        if (range.isInRange(rollToInt)) {
          return profession.name
        }
      }
    }
  }

  return 'Niepoprawny rzut'
}
