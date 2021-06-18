const fs = require('fs')

const DISK_PATH = './disk'

class SecondaryMemory {

  // No load , utilizando o método writeFileSync do fs , escreva o código que crie um novo arquivo utilizando nextFileName como path e salve o value no conteúdo deste novo arquivo.
  load (value) {
    const disk = fs.readdirSync(DISK_PATH);

    const nextFileName = `${DISK_PATH}/cel${disk.length}`

    fs.writeFileSync(nextFileName, value);
  }

  // No get , retorne o conteúdo do arquivo fileName , utilize o método readFileSync do fs . Não esqueça de converter o valor para numérico ( float ou int ).
  get (index) {
    const fileName = `${DISK_PATH}/cel${index}`

    return parseInt(fs.readFileSync(fileName, 'utf-8'));
  }

  clean () {
    fs.rmdirSync(DISK_PATH, { recursive: true })
    fs.mkdirSync(DISK_PATH)
  }
}

module.exports = SecondaryMemory