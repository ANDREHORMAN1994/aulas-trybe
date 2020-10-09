
const nationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`

const person = {
    firstName: "João",
    lastName: "Jr II"
}

const { nationality = "Brazilian" } = person

const otherPerson = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
}

console.log(nationality(otherPerson)) // Ivan is Russian
console.log(nationality(person))