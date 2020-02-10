// Meses del año

// Crear un programa que pida al usuario un numero y mostrar en un mensaje el nombre del mes correspondiente.

const userNumber = Number(prompt(`Ingrese un número para saber a qué mes corresponde:`))

switch (userNumber) {
    case 1:
        alert(`El mes 1 es enero.`)
        break;
    case 2:
        alert(`El mes 2 es febrero.`)
        break;
    case 3:
        alert(`El mes 3 es marzo.`)
        break;
    case 4:
        alert(`El mes 4 es abril.`)
        break;
    case 5:
        alert(`El mes 5 es mayo.`)
        break;
    case 6:
        alert(`El mes 6 es junio.`)
        break;
    case 7:
        alert(`El mes 7 es julio.`)
        break;
    case 8:
        alert(`El mes 8 es agosto.`)
        break;
    case 9:
        alert(`El mes 9 es septiembre.`)
        break;
    case 10:
        alert(`El mes 10 es octubre.`)
        break;
    case 11:
        alert(`El mes 11 es noviembre.`)
        break;
    case 12:
        alert(`El mes 12 es diciembre.`)
        break;
    default:
        alert(`Ingrese un número válido.`)
}