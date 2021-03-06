// From the numbers array, store even numbers in a variable  

console.log('====== Create numbers array with spread operator =====')
const numbers = [...Array(10).keys()];

console.log(`The numbers array is: ${numbers}`);

console.log('====== Style 1: With for of loop ======');
let evenNumbers = [];

for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}
console.log(`The even numbers are: ${evenNumbers}`);



console.log('====== Style 2: With for loop and mutations ======');
for (let index = 0; index < numbers.length; index++) {
  if( numbers[index] % 2 !== 0 ) {
    numbers.splice(index,1)
  }
}
console.log(`The even numbers are: ${numbers}`);



console.log('======= Style 3: With filter ========');
const isEven = number => number % 2 === 0;

evenNumbers = numbers.filter(isEven);
console.log(`The even numbers are: ${evenNumbers}`);
