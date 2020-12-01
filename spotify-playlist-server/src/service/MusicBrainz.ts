import * as SpotifyModel from "../model/interfaces/spotify";
import * as MbModel from "../model/interfaces/music_brainz";

export function searchArtist(spotifyArtist: SpotifyModel.Artist) : MbModel.Artist {
    if(spotifyArtist.id === '0gOsZcHl7H3ewXVIEnWFZX') {
        return require("../../mock/music_brainz/artist_camille.json");
    } else {
        return null;
    }
}
