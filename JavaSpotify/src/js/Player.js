import Song, { play_song } from './Song.js';

export default class Player {
    constructor(map) {
        Object.entries(map);
        let aux = 1;

        for (var [key, value] of Object.entries(map)) {
            let songKey = key;
            let songValue = value;
            let songCover = ".c" + aux;
            let song = new Song(songKey, songValue, songCover);
            play_song(song);

            aux++;
        }
    }
}