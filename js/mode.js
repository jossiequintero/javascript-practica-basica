const list = [];

const listCount = {};

const getModa = (list) => {
    list.map((element) => {
        if (listCount[element]) listCount[element]++;
        else listCount[element] = 1;
    });
    const listCountArray = Object.entries(listCount);
    listCountArray.sort((a, b) => a[1] - b[1]);
    return listCountArray.pop();
};
const onClickAddElement = () => {
    const inputElement = document.getElementById("inputElement");
    const listNumber = document.getElementById("list");
    let value = inputElement.value;
    list.push(value);
    listNumber.innerHTML += `<li>${value}</li>`;
};

const onClickCalculateModa = () => {
    let moda = getModa(list);
    alert(`The element ${moda[0]} is the moda`);
};