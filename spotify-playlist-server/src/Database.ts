import Artist from "./model/Artist";
import '../mock/artist_camille.json';

export function getArtistDataFromDb(id:string):Artist {
    return require("../mock/artist_camille.json");
}

export function saveArtistData(artist:Artist) {
    console.log("Saving artist");
    console.info(artist);
}
