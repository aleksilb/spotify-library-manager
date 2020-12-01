import Artist from "./model/Artist";
import '../mock/artist_camille.json';
import Track from "./model/Track";
import Album from "./model/Album";

export function saveAlbum(album: Album) {
    console.log("Saving album");
    console.info(album);
}

export function getAlbum(id: string) {
    return null;
}


export function getTrack(id : string) : Track {
    return null;
}

export function saveTrack(track : Track) {
    console.log("Saving track");
    console.info(track);
}

export function getArtist(id:string):Artist {
    if(id === "56ZTgzPBDge0OvCGgMO3OY") {
        return require("../mock/artist_beach_house.json");
    }
    else return null;
}

export function saveArtist(artist:Artist) {
    console.log("Saving artist");
    console.info(artist);
}
