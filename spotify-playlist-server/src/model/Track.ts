import Album from './Album';
import Artist from "./Artist";

class Track {
    id: string;
    name: string;
    album: Album;
    artists: Artist[];
    country: string;

    constructor(id: string, name: string, country: string) {
        this.id = id;
        this.name = name;
        this.country = country;
    }
}

export default Track;
