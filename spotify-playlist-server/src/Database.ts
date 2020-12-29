import {Album, Artist, Track} from './model/interfaces';
import '../mock/artist_camille.json';



export function saveAlbum(album: Album) {
    console.log("Saving album");
    console.info(album);
}

export function getAlbum(id: string) {
    if(id === '18LlCAG2iY8ht0dm7uKBy0') {
        return require('../mock/album_oui.json')
    } else {
        return null;
    }
}


export function getTrack(id : string) : Promise<Track> {
    if(id === "26tVbVkCppuEgNSQRnIu1c") {
        return new Promise((resolve) => resolve(require('../mock/track_sous_le_sable.json')));
    } else {
        return new Promise((resolve) => resolve(null));
    }
}

export function saveTrack(track : Promise<Track>) {
    console.log("Saving track");
}

export function getArtist(id : string) : Promise<Artist> {
    if(id === "56ZTgzPBDge0OvCGgMO3OY") {
        return new Promise((resolve) => resolve(require("../mock/artist_beach_house.json")));
    } else {
        return new Promise((resolve) => resolve(null));
    }
}

export function saveArtist(id : string, artistPromise : Promise<Artist>) {
    console.log("Saving artist " + id);
}
