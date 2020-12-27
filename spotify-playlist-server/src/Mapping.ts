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
    return new Track(context.spotifyTrack.id, context.spotifyTrack.name, context.album, context.artists, context.album.year, context.artists[0].country);
}

export function createAlbum(context : AlbumContext) : Album {
    return new Album(context.spotifyAlbum.id, context.spotifyAlbum.name, parseInt(context.spotifyAlbum.release_date.substring(0,4)));
}

export function createArtist(context : ArtistContext) : Artist {
    const type = (context.musicBrainzArtist != null) ? context.musicBrainzArtist.type : null;
    const country = (context.musicBrainzArtist != null) ? context.musicBrainzArtist.country : null;
    return new Artist(context.spotifyArtist.id, context.spotifyArtist.name, type, country);
}
