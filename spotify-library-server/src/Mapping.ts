import {Album, Artist, Playlist, Track} from './model/interfaces';
import {AlbumContext, ArtistContext, PlaylistContext, TrackContext} from "./model/context";

export function createPlaylist(context : PlaylistContext) : Playlist {
    return {
        id : context.spotifyPlaylist.id,
        name : context.spotifyPlaylist.name,
        tracksNum: context.spotifyPlaylist.tracks.total,
        tracks: (context.tracks != null) ? context.tracks : undefined
    }
}

export function createTrack(context : TrackContext) : Track {
    return {
        id : context.spotifyTrack.id,
        name : context.spotifyTrack.name,
        album : (context.album != null) ? context.album : createAlbum({spotifyAlbum:context.spotifyTrack.album}),
        artists : (context.artists != null) ? context.artists : context.spotifyTrack.artists.map(artist => createArtist({spotifyArtist: artist})),
        year : (context.album != null) ? context.album.year : undefined,
        country : (context.artists != null && context.artists.length > 0) ? context.artists[0].country : undefined,
        plays : (context.lastFmTrack != null) ? parseInt(context.lastFmTrack.userplaycount) : undefined
    }
}

export function createAlbum(context : AlbumContext) : Album {
    return {
        id : context.spotifyAlbum.id,
        name : context.spotifyAlbum.name,
        year : parseInt(context.spotifyAlbum.release_date.substring(0,4))
    }
}

export function createArtist(context : ArtistContext) : Artist {
    return {
        id : context.spotifyArtist.id,
        name : context.spotifyArtist.name,
        type : (context.musicBrainzArtist != null) ? context.musicBrainzArtist.type : undefined,
        country : (context.musicBrainzArtist != null) ? context.musicBrainzArtist.country : undefined
    }
}
