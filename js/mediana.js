const getMedian = (listNumber = []) => {
    listNumber.sort((a, b) => a - b);
    const length = listNumber.length;
    const middleList = length / 2;
    const IsEven = length % 2 == 0;
    let median;
    if (IsEven) {
        let firstValue = listNumber[middleList - 1];
        let secondValue = listNumber[middleList];
        median = (firstValue + secondValue) / 2;
        median = parseInt(median);
    } else {
        median = listNumber[Math.floor(middleList)];
    }
    return median;
};

let listNumber = [];

const onClickAddElementBtn = () => {
    const inputElement = document.getElementById("inputElement");
    const listElements = document.getElementById("listElements");
    let elementValue = parseInt(inputElement.value);
    listNumber.push(elementValue);
    listNumber.sort((a, b) => a - b);
    listElements.innerHTML = ``;
    listNumber.forEach((element) => {
        listElements.innerHTML += `<li>${element}</li>`;
    });
};
const onClickCalculateMedian = () => {
    const result = getMedian(listNumber);
    alert(result);
};