import Track from "./model/Track";
import Album from "./model/Album";
import Artist from "./model/Artist";
import Playlist from "./model/Playlist";
import * as Spotify from "./model/interfaces/spotify";
import {AlbumContext, ArtistContext, TrackContext} from "./model/interfaces/context";

export function createPlaylist(spotifyPlaylist : Spotify.Playlist) : Playlist {
    return new Playlist(spotifyPlaylist.id, spotifyPlaylist.name);
}

export function createTrack(context : TrackContext) : Track {
    return new Track(context.spotifyTrack.id, context.spotifyTrack.name, context.album, context.artists, context.artists[0].country);
}

export function createAlbum(context : AlbumContext) : Album {
    return new Album(context.spotifyAlbum.id, context.spotifyAlbum.name);
}

export function createArtist(context : ArtistContext) : Artist {
    return new Artist(context.spotifyArtist.id, context.spotifyArtist.name, context.musicBrainzArtist.type, context.musicBrainzArtist.country);
}
