// Estaciones del año II

// Crear un programa que pida una estación del año y mostrar en un mensaje la fecha en la que comienza y termina.

const season = prompt(`Escriba la estación del año para saber cuándo empieza y termina: verano, otoño, invierno o primavera.`)

switch (season){
    case "verano":
        alert(`El verano empieza el 21 de diciembre y termina el 20 de marzo.`)
        break;
    case "otoño":
        alert(`El otoño empieza el 21 de marzo y termina el 20 de junio.`)
        break;
    case "invierno":
        alert(`El invierno empieza el 21 de junio y termina el 20 de septiembre.`)
        break;
    case "primavera":
        alert(`La primavera empieza el 21 de septiembre y termina el 20 de diciembre.`)
        break;
    default:
        alert(`No ingresaste un nombre válido.`)
}