//Square Code
console.group("Squares");
//side of a square
//Square Perimeter
const perimeterSquare = (side) => side * 4;
//Area del square
const areaSquare = (side) => side * side;
console.groupEnd();

//triangle Code
console.group("Triangles");
//Perimeter of the triangle
const perimeterTriangle = (side1, side2, base) => {
    side1 = Number(side1);
    side2 = Number(side2);
    base = Number(base);
    return side1 + side2 + base;
};

//Area del triangle
const areaTriangle = (base, height) => (base * height) / 2;
console.groupEnd();

//Circles Code
console.group("Circles");
//Diameter
const diameterCircle = (radio) => radio * 2;
// PI
const PI = Math.PI;
// Perimeter
const perimeterCircle = (radio) => {
    const diameter = diameterCircle(radio);
    return parseFloat((diameter * PI).toFixed(2));
};
//Area
const areaCircle = (radio) => parseFloat(Math.pow(PI * radio, 2).toFixed(2));
console.groupEnd();

const calculatePerimeterSquare = () => {
    const input = document.getElementById("inputSideSquare");
    const value = input.value;
    let perimeter = perimeterSquare(value);
    alert(`The perimeter is: ${perimeter} cm`);
};
const calculateAreaSquare = () => {
    const input = document.getElementById("inputSideSquare");
    const value = input.value;
    let area = areaSquare(value);
    alert(`The area is: ${area} cm`);
};
const calculatePerimeterTriangle = () => {
    const side1 = document.getElementById("inputSideTriangle1").value;
    const side2 = document.getElementById("inputSideTriangle2").value;
    const base = document.getElementById("inputBaseTriangle").value;
    let perimeter = perimeterTriangle(side1, side2, base);
    alert(`The perimeter is: ${perimeter}`);
};
const calculateAreaTriangle = () => {
    const base = document.getElementById("inputBaseTriangle2");
    const height = document.getElementById("inputHeightTriangle");
    let area = areaTriangle(base.value, height.value);
    alert(`The area of the triangle is: ${area}`);
};
const calculateDiameterCircle = () => {
    const radio = document.getElementById("inputRadioCircle");
    const value = radio.value;
    let diameter = diameterCircle(value);
    alert(`The diameter is: ${diameter}`);
};
const calculatePerimeterCircle = () => {
    const radio = document.getElementById("inputRadioCircle2");
    const value = radio.value;
    let perimeter = perimeterCircle(value);
    alert(`The perimeter is: ${perimeter}`);
};
const calculateAreaCircle = () => {
    const radio = document.getElementById("inputRadioCircle3");
    const value = radio.value;
    let area = areaCircle(value);
    alert(`The area is: ${area}`);
};