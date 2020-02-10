const numberChosen = Number(prompt(`Ingrese un número para hallar su factorial:`));
let numberToFactor = numberChosen;

for (i = 1; i < numberChosen; i++) {
    numberToFactor *= i;
}

alert(`El factorial de ${numberChosen} es ${numberToFactor}.`)