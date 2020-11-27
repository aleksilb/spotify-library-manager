import Artist from "./model/Artist";

export function searchArtistData(name: string) : Artist {
    let artistData : Artist = new Artist(null, null);
    if(name === "Camille") {
        let mbArtist = require("../mock/music_brainz/artist_camille.json");
        artistData.country = mbArtist.country;
    }
    return artistData;
}
