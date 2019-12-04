import * as spotify from '../interfaces/spotify';

class Album {
    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }

    static createFromSpotify(album : spotify.Album) {
        return new Album(album.id, album.name);
    }
}

export default Album;