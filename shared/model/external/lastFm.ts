export interface Artist {
    name: string;
    mbid: string;
    url: string;
}

export interface Album {
    artist: string;
    title: string;
    mbid: string;
    url: string;
}

export interface Tag {
    name: string;
    url: string;
}

export interface Toptags {
    tag: Tag[];
}

export interface Track {
    name: string;
    mbid: string;
    url: string;
    duration: string;
    listeners: string;
    playcount: string;
    artist: Artist;
    album: Album;
    userplaycount: string;
    userloved: string;
    toptags: Toptags;
}
