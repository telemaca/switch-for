
const numberOfRounds = Number(prompt(`¿Cuántas rondas querés jugar?`));
let random = 0;
let userChoice = "";
let message = "";
let userScore = 0;
let computerScore = 0;
let score = 1;

if (numberOfRounds >= 1) {

    for (i = 1; i <= numberOfRounds; i++) {
        let random = Math.round(Math.random() * 2);

        if (random === 0){
            computerChoice = "piedra"
        } else if (random === 1) {
            computerChoice = "papel"
        } else if (random === 2) {
            computerChoice = "tijera"
        }

        userChoice = prompt(`Piedra, papel o tijera. Escribí tu opción en minúsculas:`);

        message = `Vos elegiste: ${userChoice} \nYo elegí: ${computerChoice}\n`

        if (userChoice === computerChoice) {
            userScore += 1;
            computerScore += 1;
            alert(message + `Empatamos. \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`)
        } else if (userChoice === "piedra"){
            if (computerChoice === "papel"){
                computerScore += 1;
                alert(message + `Te gané. \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`);
            } else if (computerChoice === "tijera") {
                userScore += 1;
                alert(message + `Me ganaste. \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`);
            }
        } else if (userChoice === "papel"){
            if (computerChoice === "tijera"){
                computerScore += 1;
                alert(message + `Te gané. \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`);
            } else if (computerChoice === "piedra") {
                userScore += 1;
                alert(message + `Me ganaste. \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`);
            }
        } else if (userChoice === "tijera"){
            if (computerChoice === "piedra"){
                computerScore += 1;
                alert(message + `Te gané. \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`);
            } else if (computerChoice === "papel") {
                userScore += 1;
                alert(message + `Me ganaste. \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`);
            }
        }
    }

    if (computerScore > userScore) {
        alert(`¡Gané yo! \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`);
    } else if (computerScore < userScore) {
        alert(`¡Me ganaste! \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`);
    } else {
        alert(`¡Empatamos! \nPuntaje: Vos (${userScore}) - Yo (${computerScore})`);
    }
} else {
    alert(`No ingreaste un número válido.`)
}