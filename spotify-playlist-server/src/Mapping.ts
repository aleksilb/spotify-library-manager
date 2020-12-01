import * as Spotify from "./model/interfaces/spotify";
import * as MB from "./model/interfaces/music_brainz";
import Track from "./model/Track";
import Album from "./model/Album";
import Artist from "./model/Artist";

export function createTrack(spotifyTrack: Spotify.Track, artist : Artist) : Track {
    return new Track(spotifyTrack.id, spotifyTrack.name, artist.country);
}

export function createAlbum(spotifyAlbum : Spotify.Album) : Album {
    return new Album(spotifyAlbum.id, spotifyAlbum.name);
}

export function createArtist(spotifyArtist : Spotify.Artist, mbArtist : MB.Artist) : Artist {
    return new Artist(spotifyArtist.id, spotifyArtist.name, mbArtist.type, mbArtist.country);
}
