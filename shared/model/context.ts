import * as Spotify from './external/spotify';
import * as Model from "./interfaces";
import * as LastFm from "../model/external/lastFm";
import {IArtist} from "musicbrainz-api";

export interface PlaylistContext {
    spotifyPlaylist : Spotify.Playlist;
    tracks ?: Model.Track[];
}

export interface TrackContext {
    spotifyTrack : Spotify.Track;
    lastFmTrack ?: LastFm.Track;
    artists ?: Model.Artist[];
    album ?: Model.Album;
}

export interface ArtistContext {
    spotifyArtist : Spotify.Artist;
    musicBrainzArtist ?: IArtist;
}

export interface AlbumContext {
    spotifyAlbum : Spotify.Album;
    artists ?: Model.Artist[];
}
