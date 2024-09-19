const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers = numbers.map((num) => num*2)
console.log(doubleNumbers);

const words = ["one", "two", "three", "four", "five","six", "seven", "eight"];
const fiveLetters = words.filter((word) => word.length >= 5 );
console.log(fiveLetters);

const numbers2 = [25, 50, 75, 100];
const sumAllNumbers = numbers2.reduce((acc, curr)=> acc + curr, 0);
console.log(sumAllNumbers);

const numbers3 = [1, 3, 5, 7, 9, 11, 13, 15];
const numberGreaterTen = numbers3.some((currywurst)=>currywurst >= 10);
console.log(numberGreaterTen);