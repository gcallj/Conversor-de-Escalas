// Converte qualque escala linear
var Fahrenheit = map(41,0,100,32,212);
console.log(`O valor em Fahrenheit é: ${Fahrenheit}ºF`)



function map(x,xmin,xmax,ymin,ymax){
    return (x - xmin) * (ymax - ymin) / (xmax - xmin) + ymin;
}