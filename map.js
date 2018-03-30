class Person {
  constructor(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  }
};

const myNeighbours = [
  new Person('Claudia Gomez', 39, 'F'),
  new Person('Misha Perez', 8, 'F'),
  new Person('Rafael Besos', 37, 'M')
];

// prefix names with title
const prefixPerson = person => {
  person.gender === 'F'
   ? person.prefixName = `Ms ${person.name}`
   : person.prefixName = `Mr ${person.name}`
return person
};

const prefixedMyNeighbours = myNeighbours.map(prefixPerson);

console.log(myNeighbours);
console.log(prefixedMyNeighbours);

// ======================== Double the numbers
const numbers = [...Array(10).keys()];

const multiplyByTwo = number => number * 2;

const doubleNumbers = numbers.map(multiplyByTwo);

console.log(numbers, doubleNumbers );
