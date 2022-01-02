export interface Album {
    id: string;
    name: string;
    year ?: number;
}

export interface Artist {
    id : string;
    name : string;
    type ?: string;
    country ?: string;
}

export interface Playlist {
    id : string;
    name : string;
    tracksNum : number;
    tracks ?: Track[];
}

export interface Track {
    id: string;
    name: string;
    album: Album;
    artists: Artist[];
    year ?: number;
    country ?: string;
    plays ?: number;
}
