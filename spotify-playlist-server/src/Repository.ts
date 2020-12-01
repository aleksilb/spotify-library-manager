import Artist from "./model/Artist";
import * as Database from "./Database";
import * as Services from "./Services";
import * as Spotify from  "./model/interfaces/spotify";

export function getArtist(spotifyArtist : Spotify.Artist) : Artist {
    let artist = Database.getArtist(spotifyArtist.id);
    if(artist == null) {
        artist = Services.getArtist(spotifyArtist);
        Database.saveArtist(artist);
    }
    return artist;
}
