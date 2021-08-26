const listNumber = [200, 300, 500, 400, 100, 500, 1000];
listNumber.sort((a, b) => a - b);
console.log(listNumber);

const middleList = listNumber.length / 2;

// If it is even, floor the number
// If it is not even, take the middle and middle -1
console.log(middleList);
const IsEven = (number) => number % 2 == 0;

let median;
if (IsEven(listNumber.length)) {
    let firstValue = listNumber[middleList - 1];
    let secondValue = listNumber[middleList];
    median = (firstValue + secondValue) / 2;
    median = parseInt(median);
} else {
    median = listNumber[Math.floor(middleList)];
}
console.log(median);