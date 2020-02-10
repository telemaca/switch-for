let channelTV = Math.round(Math.random() * 99);
let volumeTV = Math.round(Math.random() * 100);

const onOrOff = confirm(`¿Desea prender el televisor?`)
let actionToMakeChannel = ""
let actionToMakeVolume = ""

if (onOrOff) {
    alert(`El canal actual del televisor es ${channelTV}. El volumen actual está en ${volumeTV}. A continuación le mostraremos las acciones que se pueden realizar.`)

    actionToMakeChannel = prompt(`El canal es ${channelTV}. ¿Desea cambiarlo? \n -Si sabe el número del canal que quiere, escriba CAMBIAR \n -Si quiere pasar al canal siguiente, escriba SIGUIENTE \n -Si quiere pasar al canal anterior, escriba ANTERIOR.\n -Si no quiere cambiar el canal, apriete Cancelar.`)

    switch (actionToMakeChannel) {
        case "CAMBIAR":
            channelTV = Number(prompt(`Ingrese el número del canal que desea:`))
            break;
        case "SIGUIENTE":
            channelTV++
            break;
        case "ANTERIOR":
            channelTV--
            break;
    }

    actionToMakeVolume = prompt(`El volumen está en ${volumeTV}. ¿Desea cambiarlo? \n -Si desea subir el volumen en 5, escriba SUBIR. \n -Si desea bajar el volumen en 5, escriba BAJAR. \n -Si desea mutear el volumen, escriba MUTEAR. \n -Si no quiere cambiar el volumen, apriete Cancelar.`)

    switch (actionToMakeVolume) {
        case "SUBIR":
            volumeTV += 5
            break;
        case "BAJAR":
            volumeTV -= 5
            break;
        case "MUTEAR":
            volumeTV = 0
            break;
    }

    alert(`El canal actual es ${channelTV}. El volumen actual es ${volumeTV}.`)
}