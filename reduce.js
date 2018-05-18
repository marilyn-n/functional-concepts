// The most flexible method is reduce, which can be used to create map and filter methods


const filter = (fn, arr) => arr.reduce((newArr, item) => {
  return fn(item) ? newArr.concat([item]) : newArr;
}, []);


const map = (fn, arr) => arr.reduce((acc, item, index, arr) => {
  return acc.concat(fn(item, index, arr));
}, []);


//============= Example: Calculating a Sum

const numbers = [...Array(12).keys()];

const sum = (acumulator, current) => acumulator + current;

const totalSum = numbers.reduce(sum);

console.log(` the total sum of the array is ${totalSum}`);
