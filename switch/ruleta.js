const rouletteNumber = Math.round(Math.random() * 36) + 1;
let rouletteColor = Math.round(Math.random());

rouletteColor === 0 ? rouletteColor = "ROJO" : rouletteColor = "NEGRO";

const message = `Salió el ${rouletteNumber} ${rouletteColor}.\n`

const evenOrOddNumber = rouletteNumber % 2

const userBet = prompt(`Vamos a jugar a la ruleta. ¿A qué le querés apostar? \n - ROJO / - NEGRO \n - PAR / - IMPAR \n - ALTA / - BAJA \n - PRIMERA DOCENA \n - SEGUNDA DOCENA \n - TERCERA DOCENA`)

switch (userBet) {
    case "ROJO":
    case "NEGRO":
        userBet === rouletteColor ? alert(message + `Ganaste.`) : alert(message + `Perdiste.`);
        break;
    case "PAR":
        evenOrOddNumber === 0 ? alert(message + `Ganaste.`) : alert(message + `Perdiste.`);
        break;
    case "IMPAR":
        evenOrOddNumber !== 0 ? alert(message + `Ganaste.`) : alert(message + `Perdiste.`);
        break;
    case "ALTA":
        rouletteNumber >= 18 ? alert(message + `Ganaste.`) : alert(message + `Perdiste.`);
        break;
    case "BAJA":
        rouletteNumber < 18 ? alert(message + `Ganaste.`) : alert(message + `Perdiste.`);
        break;
    case "PRIMERA DOCENA":
        rouletteNumber <= 12 ? alert(message + `Ganaste.`) : alert(message + `Perdiste.`);
        break;
    case "SEGUNDA DOCENA":
        rouletteNumber >= 13 && rouletteNumber <= 24 ? alert(message + `Ganaste.`) : alert(message + `Perdiste.`);
        break;
    case "TERCERA DOCENA":
        rouletteNumber >= 25 ? alert(message + `Ganaste.`) : alert(message + `Perdiste.`);
        break;        
    default:
        alert(`No ingresó una opción válida.`)
}