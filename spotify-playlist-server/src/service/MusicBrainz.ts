import * as SpotifyModel from "../model/external/spotify";
import * as MbModel from "../model/external/music_brainz";

export function searchArtist(spotifyArtist: SpotifyModel.Artist) : MbModel.Artist {
    if(spotifyArtist.id === '0gOsZcHl7H3ewXVIEnWFZX') {
        let result = require('../../mock/music_brainz/search_camille.json');
        let bestScore = 0;
        let choice = null;
        result.artists.forEach(artist => {
            if(artist.score > bestScore) {
                choice = artist;
                bestScore = artist.score;
            }
        });
        return choice;
    } else {
        return null;
    }
}
