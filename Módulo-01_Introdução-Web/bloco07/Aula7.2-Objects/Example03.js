const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// UTILIZANDO OBJECT.KEYS
const arrayAbilities = (student) => Object.keys(student);
// abilities(student1);

const messageAbilities1 = (student, Array) => {
  for(let i = 0; i < Array.length; i += 1) {
    console.log(`skill: ${Array[i]} | nível: ${student[Array[i]]}`)
  }
}
messageAbilities1(student1, arrayAbilities(student1));

// UTILIZANDO OBJECT.VALUES
const messageAbilities2 = (student, Array) => {
  for(let i = 0; i < Array.length; i += 1) {
    console.log(`skill: ${Array[i]} | nível: ${Object.values(student)[i]}`)
  }
}
messageAbilities2(student2, arrayAbilities(student2));
