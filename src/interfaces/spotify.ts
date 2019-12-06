export interface ExternalUrls {
    spotify: string;
}

export interface AddedBy {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    type: string;
    uri: string;
}

export interface ExternalIds {
    isrc: string;
}

export interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
}

export interface PlaylistItem {
    added_at: string;
    added_by: AddedBy;
    is_local: boolean;
    track: Track;
}

export interface PlaylistTracks {
    href: string;
    items: PlaylistItem[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
}

export interface Owner {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface Tracks {
    href: string;
    total: number;
}

export interface Playlist {
    collaborative: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: any[];
    name: string;
    owner: Owner;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}

export interface UserPlaylists {
    href: string;
    items: Playlist[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
}