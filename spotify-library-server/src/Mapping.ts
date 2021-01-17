import {Album, Artist, Playlist, Track} from './model/interfaces';
import * as Spotify from "./model/external/spotify";
import {AlbumContext, ArtistContext, TrackContext} from "./model/context";

export function createPlaylist(spotifyPlaylist : Spotify.Playlist) : Playlist {
    return {
        id : spotifyPlaylist.id,
        name : spotifyPlaylist.name,
        tracksNum: spotifyPlaylist.tracks.total
    }
}

export function createTrack(context : TrackContext) : Track {
    return {
        id : context.spotifyTrack.id,
        name : context.spotifyTrack.name,
        album : context.album,
        artists : context.artists,
        year : context.album.year,
        country : context.artists[0].country,
        plays : (context.lastFmTrack != null) ? parseInt(context.lastFmTrack.userplaycount) : 0
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
        type : (context.musicBrainzArtist != null) ? context.musicBrainzArtist.type : null,
        country : (context.musicBrainzArtist != null) ? context.musicBrainzArtist.country : null
    }
}
