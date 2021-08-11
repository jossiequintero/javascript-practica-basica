//Square Code
console.group("Squares");
//side of a square
//Square Perimeter
function perimeterSquare(side) {
    return side * 4;
}
//Area del square
function areaSquare(side) {
    return side * side;
}
console.groupEnd();

//triangle Code
console.group("Triangles");
//Perimeter of the triangle
function perimeterTriangle(side1, side2, base) {
    return side1 + side2 + base;
}

//Area del triangle
function areaTriangle(base, height) {
    return (base * height) / 2;
}
console.groupEnd();

//Circles Code
console.group("Circles");
//Diameter
function diameterCircle(radio) {
    return radio * 2;
}
// PI
const PI = Math.PI;
// Perimeter
function perimeterCircle(radio) {
    const diameter = diameterCircle(radio);
    return parseFloat((diameter * PI).toFixed(2));
}
//Area
function areaCircle(radio) {
    return parseFloat(Math.pow(PI * radio, 2).toFixed(2));
}
console.groupEnd();