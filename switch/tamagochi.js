let health = Math.round(Math.random() * 10) + 1;
let happiness = Math.round(Math.random() * 10) + 1;
let cleanliness = Math.round(Math.random() * 10) + 1;
let energy = Math.round(Math.random() * 10) + 1;

alert(`Tu tamagochi Totoro hoy se siente así: \n Salud: ${health} \n Felicidad: ${happiness} \n Limpieza: ${cleanliness} \n Energía: ${energy} \n A continuación te mostraré una lista de acciones que podés realizar.`)

const actionForTamagochi = prompt(`ALIMENTAR: +3 energía, +2 felicidad \n JUGAR: +2 felicidad, -2 energía, -1 limpieza \n DORMIR: +5 energía, +2 salud, -2 limpieza \n VACUNAR: +5 salud, -6 felicidad \n BAÑAR: +3 salud \n RETAR: -3 felicidad \n ACARICIAR: +4 felicidad \n ¿Cuál querés realizar?`)

switch (actionForTamagochi){
    case "ALIMENTAR":
        energy += 3
        happiness += 2
        break;
    case "JUGAR":
        energy -= 2
        happiness += 2
        cleanliness -= 1
        break;
    case "DORMIR":
        energy += 5
        health += 2
        cleanliness -= 2
        break;
    case "VACUNAR":
        health += 5
        happiness -= 6
        break;
    case "BAÑAR":
        health += 3
        break;
    case "RETAR":
        happiness -= 3
        break;
    case "ACARICIAR":
        happiness += 4
        break;
    default: 
        alert(`No ingresaste una opción válida.`)
}

if (health > 10) {
    health = 10;
} else if (health < 0) {
    health = 0;
}

if (happiness > 10) {
    happiness = 10;
} else if (happiness < 0) {
    happiness = 0;
}

if (cleanliness > 10) {
    cleanliness = 10;
} else if (cleanliness < 0) {
    cleanliness = 0;
}

if (energy > 10) {
    energy = 10;
} else if (energy < 0) {
    energy = 0;
}

alert(`Tu tamagochi Totoro ahora se siente así: \n Salud: ${health} \n Felicidad: ${happiness} \n Limpieza: ${cleanliness} \n Energía: ${energy}`)