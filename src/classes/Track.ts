import * as spotify from '../interfaces/spotify';
import Album from './Album';
import Artist from "./Artist";

class Track {
    id: string;
    name: string;
    album: Album;
    artists: Artist[];

    constructor(id: string, name : string, album : Album, artists : Artist[]) {
        this.id = id;
        this.name = name;
        this.album = album;
        this.artists = artists;
    }

    static createFromSpotify(spotifyTrack : spotify.Track) {
        let album : Album = Album.createFromSpotify(spotifyTrack.album);
        let artists : Artist[] = [];
        spotifyTrack.artists.map((artist) => {
            artists.push(Artist.createFromSpotify(artist));
        });
        return new Track(spotifyTrack.id, spotifyTrack.name, album, artists);
    }
}

export default Track;