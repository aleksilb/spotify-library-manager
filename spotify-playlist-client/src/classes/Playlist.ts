import * as spotify from "../interfaces/spotify";

export default class Playlist {
    id : string;
    name : string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    static createFromSpotify(spotifyPlaylist : spotify.Playlist) {
        return new Playlist(spotifyPlaylist.id, spotifyPlaylist.name);
    }
}