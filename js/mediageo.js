const listNumber = [];

const onClickAddElement = () => {
    let elementValue = document.getElementById("inputElement").value;
    elementValue = Number(elementValue);
    listNumber.push(elementValue);
    const list = document.getElementById("list");
    list.innerHTML += `<li>${elementValue}</li>`;
};

const onClickCalculate = () => {
    const geoMean = getGeoMean(listNumber);
    alert(`The Geometric Mean is: ${geoMean}`);
};

const getGeoMean = (list) => {
    const multi = list.reduce((a, b) => {
        console.log(a, b);
        return a * b;
    });
    console.log(multi);
    return Math.pow(multi, 1 / list.length).toFixed(2);
};