import Track from "./Track";

export default class Playlist {
    id : string;
    name : string;
    tracks : Track[];

    constructor(id: string, name: string, tracks : Track[] = []) {
        this.id = id;
        this.name = name;
        this.tracks = tracks;
    }
}
