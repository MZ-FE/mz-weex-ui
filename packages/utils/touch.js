import { Direction } from './direction.js'

export class Touch {
  static MIN_DISTANCE = 10

  static Create() {
    return new Touch()
  }

  constructor() {
    this.startX = 0
    this.startY = 0
    this.deltaX = 0
    this.deltaY = 0

    this.direction = Direction.NONE
  }

  get offsetX() {
    return Math.abs(this.deltaX)
  }

  get offsetY() {
    return Math.abs(this.deltaY)
  }

  get isHorizental() {
    return this.direction === Direction.HOR
  }

  get isVertical() {
    return this.direction === Direction.VER
  }

  get isUndetermined() {
    return this.direction === Direction.NONE
  }

  resolveDirection(x, y) {
    if (x > y && x > Touch.MIN_DISTANCE) {
      return Direction.HOR
    }
    if (y > x && y > Touch.MIN_DISTANCE) {
      return Direction.VER
    }
    return Direction.NONE
  }

  reset() {
    this.startX = 0
    this.startY = 0
    this.deltaX = 0
    this.deltaY = 0
    this.direction = Direction.NONE
  }

  getTouchByEvent(e) {
    return e.changedTouches[0]
  }

  start(evt) {
    const e = this.getTouchByEvent(evt)
    this.reset()
    this.startX = e.screenX
    this.startY = e.screenY
  }

  move(evt) {
    const e = this.getTouchByEvent(evt)
    this.deltaX = e.screenX - this.startX
    this.deltaY = e.screenY - this.startY
    if (this.isUndetermined) {
      this.direction = this.resolveDirection(this.offsetX, this.offsetY)
    }
  }
}
