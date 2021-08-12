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
const perimeterTriangle = (side1, side2, base) => side1 + side2 + base;

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
    perimeter = perimeterSquare(value);
    alert(`The perimeter is: ${perimeter} cm`);
};
const calculateAreaSquare = () => {
    const input = document.getElementById("inputSideSquare");
    const value = input.value;
    area = areaSquare(value);
    alert(`The area is: ${area} cm`);
};