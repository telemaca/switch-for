const userLaps = Number(prompt(`¿Cuántas vueltas va a realizar?`));

let laps = 0;
let lapsString = "";

for (i = 1; i <= userLaps; i++) {
    lap = Number(prompt(`Ingrese los segundos de la vuelta ${i}:`));
    laps += lap;
    lapsString += `Vuelta ${i}: ${lap}s\n`;
}

const averageLaps = laps / userLaps;

alert(`Cantidad de vueltas: ${userLaps}\n` + lapsString + `⏱ Promedio: ${averageLaps}s`);