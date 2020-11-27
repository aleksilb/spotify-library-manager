import Artist from "./model/Artist";

export function searchArtistData(artist: Artist) : Artist {
    let mb_artist =  require("../mock/music_brainz/artist_camille.json");
    artist.country = mb_artist.country;
    return artist;
}
