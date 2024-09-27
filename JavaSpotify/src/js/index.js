import songs from '../assets/songs/*.mp3';
import Player from './Player.js';

const map = { };

let aux = 1;
for (var key of Object.keys(songs)) {
    // asociar map con la canción songs[key]
    map[`.item-${aux}`] = songs[key];
    aux++;
}

//Crea un objeto Player y pasa el objeto map
const player = new Player(map);