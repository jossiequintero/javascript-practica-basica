const getAverage = (list = []) => {
    let sum = list.reduce((sumTotal, number) => sumTotal + number, 0);
    const average = sum / list.length;
    return average;
};
let result = getAverage([10, 20, 30, 50, 60]);
console.log(result);