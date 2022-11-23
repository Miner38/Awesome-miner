class Island {
  constructor(name, background, islandComplex) {
    this.name = name
    this.background = background
    this.portalUseMouse = islandComplex
  }
  portalPosition() {
    return portalPositions[islandComplex]
  }
}
