//============= Calculating a Sum

const numbers = [...Array(12).keys()];

const sum = (acumulator, current) => acumulator + current;

const totalSum = numbers.reduce(sum);

console.log(` the total sum of the array is ${totalSum}`);