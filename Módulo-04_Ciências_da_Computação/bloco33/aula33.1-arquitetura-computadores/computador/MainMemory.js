class MainMemory {
  constructor () {
    this.loadedMemory = [];
  }

  // No load você irá adicionar ( push ) o elemento passado ( value ) ao array loadedMemory .
  load (value) {
    this.loadedMemory.push(value);
  }

  // No get você irá retornar a posição dada ( index ) do array de loadedMemory .
  // Não esqueça de converter o valor para numérico ( float ou int ).
  get (index) {
    return parseInt(this.loadedMemory[index]);
  }

  clean () {
    this.loadedMemory = [];
  }
}

module.exports = MainMemory