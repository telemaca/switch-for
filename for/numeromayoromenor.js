// Número mayor o menor

// Crear un programa que pregunte si se desea buscar el mayor o el menor número de un conjunto. Luego, preguntar entre cuántos se desea buscar. Ir pidiendo ingresar uno por uno la cantidad de números que se eligió, y al finalizar mostrar el número mayor o menor de todos los ingresados según el elegido.

const smallestOrBiggest = prompt(`¿Desea hallar el número mayor o el menor? Escriba "mayor" o "menor".`)
const numberAmount = Number(prompt(`¿Cuántos números desea ingresar?`))

let numberChosen = Number("");
let biggestNumber = numberChosen;
let smallestNumber = 1000000000000000000000000000000000;

if (smallestOrBiggest === "mayor") {

    for (i = 0; i < numberAmount; i++) {
        numberChosen = Number(prompt(`Ingrese un número.`))
        if (numberChosen > biggestNumber) {
            biggestNumber = numberChosen;
        } 
    }

    alert(`El número más grande es ${biggestNumber}.`)

} else if (smallestOrBiggest === "menor") {

    for (i = 0; i < numberAmount; i++) {
        numberChosen = Number(prompt(`Ingrese un número.`))
        
        if (numberChosen < smallestNumber) {
            smallestNumber = numberChosen;
        } 
    }

    alert(`El número más pequeño es ${smallestNumber}.`)
}