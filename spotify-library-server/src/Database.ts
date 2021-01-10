import {Album, Artist, Track} from './model/interfaces';
import '../mock/artist_camille.json';

export function saveAlbum(albumPromise: Promise<Album>) {
    albumPromise.then(album => {
        console.log("Saving album " + album.name);
    })
}

export function getAlbum(id: string) : Promise<Album> {
    if(id === "18LlCAG2iY8ht0dm7uKBy0") {
        return Promise.resolve(require('../mock/album_oui.json'));
    } else {
        return Promise.resolve(null);
    }
}


export function getTrack(id : string) : Promise<Track> {
    if(id === "26tVbVkCppuEgNSQRnIu1c") {
        return Promise.resolve(require('../mock/track_sous_le_sable.json'));
    } else {
        return Promise.resolve(null);
    }
}

export function saveTrack(trackPromise : Promise<Track>) {
    trackPromise.then(track => {
        console.log("Saving track " + track.name);
    });
}

export function getArtist(id : string) : Promise<Artist> {
    if(id === "56ZTgzPBDge0OvCGgMO3OY") {
        return Promise.resolve(require("../mock/artist_beach_house.json"));
    } else {
        return Promise.resolve(null);
    }
}

export function saveArtist(artistPromise : Promise<Artist>) {
    artistPromise.then(artist => {
        console.log("Saving artist " + artist.name);
    });
}
