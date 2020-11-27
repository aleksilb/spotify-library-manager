import Artist from "./model/Artist";
import '../mock/artist_camille.json';

export function getArtistDataFromDb(id:string):Artist {
    if(id === "0gOsZcHl7H3ewXVIEnWFZX") {
        return require("../mock/artist_camille.json");
    }
    else return null;
}

export function saveArtistData(artist:Artist) {
    console.log("Saving artist");
    console.info(artist);
}
