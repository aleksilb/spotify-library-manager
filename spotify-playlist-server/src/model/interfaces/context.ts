import * as Spotify from './spotify';
import * as MB from './music_brainz';
import Artist from "../Artist";

export interface TrackContext {
    spotifyTrack : Spotify.Track;
    artists ?: Artist[];
}

export interface ArtistContext {
    spotifyArtist : Spotify.Artist;
    musicBrainzArtist ?: MB.Artist;
}

export interface AlbumContext {
    spotifyAlbum : Spotify.Artist;
    artists ?: Artist[];
}
