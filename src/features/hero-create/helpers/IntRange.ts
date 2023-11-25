export class IntRange {
  start: number
  end: number

  constructor(start: number, end: number) {
    this.start = start
    this.end = end
  }

  isInRange(num: number) {
    if (num >= this.start && num <= this.end) return true
    return false
  }
}
