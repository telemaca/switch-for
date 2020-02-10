const playlistName = prompt(`Ingrese el nombre de la playlist a crear:`);
let songNumber = Number(prompt(`¿Cuántas canciones quiere inclulir?`));

let songs = "";

for (i = 0; i < songNumber; i++) {
    const song = prompt(`Ingrese el nombre de la canción. Le quedan ${songNumber - i} canciones por ingresar.`);
    songs += song + "\n";
}

alert(`La playlist "${playlistName}" tiene ahora las siguientes canciones:\n
${songs}`)