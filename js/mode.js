const list = [];

const listCount = {};

const getModa = (list) => {
    list.map((element) => {
        if (listCount[element]) listCount[element]++;
        else listCount[element] = 1;
    });
    const listCountArray = Object.entries(listCount);
    listCountArray.sort((a, b) => a[1] - b[1]);
    const lastModa = listCountArray[listCountArray.length - 1];
    const moda = listCountArray.filter((element) => element[1] === lastModa[1]);
    return moda;
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
    const result = document.getElementById("result");
    if (moda.length > 1) {
        for (let element in moda) {
            element = moda[element];
            result.innerHTML += `<p>The element ${element[0]} is repeated ${element[1]} times </p>`;
        }
    } else {
        console.log(moda);
        result.textContent = `The moda is the element ${moda[0][0]} that is repeated ${moda[0][1]} times`;
    }
};