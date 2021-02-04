import * as SpotifyModel from "../model/external/spotify";
import {IArtist, MusicBrainzApi} from 'musicbrainz-api';

const api = new MusicBrainzApi({
    appName: 'spotify-playlist',
    appVersion: '0.1.0',
    appContactInfo: 'aleksi.lindblad@gmail.com'
});

export async function searchArtist(spotifyArtist: SpotifyModel.Artist): Promise<IArtist> {
    if (process.env.USE_MOCKS === 'true') {
        return require('../../mock/music_brainz/artist_camille.json');
    }

    let artistResults = await api.searchArtist({artist: spotifyArtist.name})
        .catch(error => {
            console.error("Failed to get artist " + spotifyArtist.name + " data from MusicBrainz");
            console.error(error);
            return null;
        });

    let bestScore = 0;
    let choice: IArtist = null;

    artistResults.artists.forEach(artist => {
        if (artist.score > bestScore) {
            choice = artist;
            bestScore = artist.score;
        }
    });

    return choice;
}

