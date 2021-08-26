const getAverage = (list = []) => {
    let sum = list.reduce((sumTotal, number) => sumTotal + number, 0);
    const average = sum / list.length;
    return average.toFixed(2);
};
const list = [];
const onClickAddElement = () => {
    const inputElement = document.getElementById("inputElement");
    const listElement = document.getElementById("listElement");
    let element = parseInt(inputElement.value);
    inputElement.value = "";
    list.push(element);
    listElement.innerHTML += `<li>${element}</li>`;
};
const onClickAverageBtn = () => {
    const average = getAverage(list);
    alert(`The average is: ${average}`);
};