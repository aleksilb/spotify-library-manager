import * as spotify from './interfaces/spotify';

class Artist {
    id : string;
    name : string;
    country : string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    static createFromSpotify(spotifyArtist : spotify.Artist) {
        return new Artist(spotifyArtist.id, spotifyArtist.name);
    }
}

export default Artist;
