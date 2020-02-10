let moneyInAccount = 20150;
let correctPIN = "2016";
let actionToMake = "";
let moneyToWithdraw = 0;
let moneyToDeposit = 0;
let moneyToTransfer = 0;
const alias1 = "telemaca";
const alias2 = "odiseo";
const alias3 = "penelope";
let aliasToTransfer = "";
let newPIN = "";
let oldPINCheck = "";


const userPIN = prompt(`Bienvenidx. Para realizar operaciones, ingrese su PIN:`);

if (userPIN === correctPIN) {
    actionToMake = prompt(`¿Qué operación desea realizar? EXTRAER, DEPOSITAR, TRANSFERIR, CAMBIAR PIN, SALIR.`);

    switch (actionToMake){
        case "EXTRAER":
            moneyToWithdraw = Number(prompt(`¿Cuánto dinero quiere extraer?`))

            if (moneyInAccount >= moneyToWithdraw) {
                moneyInAccount -= moneyToWithdraw
                alert(`Ha extraído $${moneyToWithdraw}. Tiene $${moneyInAccount} en su cuenta.`)
            } else {
                alert(`No tiene dinero disponible para hacer esa extracción.`)
            }
            break;

        case "DEPOSITAR":
            moneyToDeposit = Number(prompt(`¿Cuánto dinero quiere depositar?`))
            moneyInAccount += moneyToDeposit
            alert(`Ha depositado $${moneyToDeposit}. Tiene $${moneyInAccount} en su cuenta.`)
            break;

        case "TRANFERIR":
            moneyToTransfer = Number(prompt(`¿Cuánto dinero quiere transferir?`))
            aliasToTransfer = prompt(`Ingrese el alias de la cuenta a tranferir $${moneyToTransfer}`) 
            moneyInAccount -= moneyToTransfer

            if (moneyInAccount > moneyToTransfer){

                switch (aliasToTransfer) {
                    case alias1:
                    case alias2:
                    case alias3:
                        alert(`Se han transferido $${moneyToTransfer} a la cuenta de alias "${aliasToTransfer}". Le quedan $${moneyInAccount}.`)
                        break;
                    default:
                        alert(`El alias ingresado no es válido.`)
                }
            } else {
                alert(`No tiene dinero disponible para hacer esa tranferencia.`)
            }
            break;

        case "CAMBIAR PIN":
            newPIN = prompt(`Ingrese el nuevo PIN:`)
            oldPINCheck = prompt(`Ingrese el PIN original para autorizar el cambio.`)

            oldPINCheck === userPIN ? alert(`La operación fue exitosa. Ha cambiado su PIN.`) : alert(`El PIN ingresado no se corresponde con el PIN original.`);

            break;

        case "SALIR":
            alert(`Gracias por operar con nosotros.`)
            break;

        default:
            alert(`No ingresó una opción válida.`)
    }

    alert(`Gracias por operar con nosotros.`)

} else {
    alert(`El PIN ingresado no es correcto.`)
}