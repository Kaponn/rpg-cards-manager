import { IntRange } from './IntRange'

export class Profession {
  id: string
  name: string
  ranges: IntRange[]
  raceToRange: Map<string, IntRange>

  constructor(id: string, name: string, ranges: IntRange[]) {
    this.id = id
    this.name = name
    this.ranges = ranges
    this.raceToRange = new Map<string, IntRange>([])
    this.raceToRange.set('human', ranges[0])
    this.raceToRange.set('elf', ranges[1])
    this.raceToRange.set('dwarf', ranges[2])
    this.raceToRange.set('halfling', ranges[3])
  }
}
