//Square Code
console.group("Squares");
//side of a square
const squareSide = 5;
console.log(`The side of the square measures: ${squareSide} cm`);
//Square Perimeter
const perimeterSquare = squareSide * 4;
console.log(`The perimeter of the square measures: ${perimeterSquare} cm`);
//Area del square
const areaSquare = squareSide * squareSide;
console.log(`The area of the square measures: ${areaSquare} cm^2`);
console.groupEnd();

//triangle Code
console.group("Triangles");
//Sides of the triangle
const [sideTriangle1, sideTriangle2, baseTriangle, heightTriangle] = [
    6, 6, 4, 5,
];
console.log(
    `The sides of the triangle measures: ${sideTriangle1} cms,${sideTriangle2} cms, ${baseTriangle}
    cms.`
);
console.log(`The height of the triangle measures: ${heightTriangle} cms`);
//Perimeter of the triangle
const perimeterTriangle = sideTriangle1 + sideTriangle2 + baseTriangle;
console.log(`The perimeter of the triangle measures: ${perimeterTriangle} cms`);
//Area del triangle
const areaTriangle = (baseTriangle * heightTriangle) / 2;
console.log(`The area of the triangle measures: ${areaTriangle} cms^2`);
console.groupEnd();

//Circles Code
console.group("Circles");
//Radio
const radioCircle = 4;
console.log(`The radio of the circle measures: ${radioCircle} cms.`);
//Diameter
const diameterCircle = radioCircle * 2;
console.log(`The diameter of the circle measures: ${diameterCircle} cms.`);
// PI
const PI = parseFloat(Math.PI.toFixed(4));
console.log(`PI is equal to: ${PI}.`);
// Perimeter
const perimeterCircle = parseFloat((diameterCircle * PI).toFixed(2));
console.log(`The perimeter of the circle measures: ${perimeterCircle} cms.`);
//Area
const areaCircle = parseFloat(Math.pow(PI * radioCircle, 2).toFixed(2));
console.log(`The area of the circle measures: ${areaCircle} cms.`);
console.groupEnd();