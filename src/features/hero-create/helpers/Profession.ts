import { IntRange } from './IntRange'

export class Profession {
  name: string
  ranges: IntRange[]
  raceToRange: Map<string, IntRange>

  constructor(name: string, ranges: IntRange[]) {
    this.name = name
    this.ranges = ranges
    this.raceToRange = new Map<string, IntRange>([])
    this.raceToRange.set('human', ranges[0])
    this.raceToRange.set('elf', ranges[1])
    this.raceToRange.set('dwarf', ranges[2])
    this.raceToRange.set('halfling', ranges[3])
  }
}
