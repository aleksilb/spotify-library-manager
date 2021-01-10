import * as SpotifyModel from "../model/external/spotify";
import {IArtist, MusicBrainzApi} from 'musicbrainz-api';

export class MusicBrainz {
    private static api = new MusicBrainzApi({
        appName: 'spotify-playlist',
        appVersion: '0.1.0',
        appContactInfo: 'aleksi.lindblad@gmail.com'
    });

    static searchArtist(spotifyArtist: SpotifyModel.Artist): Promise<IArtist> {
        return this.api.searchArtist({artist: spotifyArtist.name})
            .then(artistResults => {
                let bestScore = 0;
                let choice: IArtist = null;

                artistResults.artists.forEach(artist => {
                    if (artist.score > bestScore) {
                        choice = artist;
                        bestScore = artist.score;
                    }
                });

                return choice;
            }).catch(error => {
                console.error("Failed to get artist " + spotifyArtist.name + " data from MusicBrainz");
                console.error(error);
                return null;
            });
    }
}
