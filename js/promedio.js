const listNumber = [200, 1000, 600, 500];
console.log(listNumber);

let sum = listNumber.reduce((sumTotal, number) => sumTotal + number, 0);

const average = sum / listNumber.length;
console.log(average);