import Playlist from "./model/Playlist";
import * as Spotify from "./model/interfaces/spotify";
import Track from "./model/Track";
import Album from "./model/Album";
import Artist from "./model/Artist";

export function mapSpotifyPlaylist(spotifyPlaylist : Spotify.Playlist) : Playlist {
    return new Playlist(spotifyPlaylist.id, spotifyPlaylist.name);
}

export function mapSpotifyPlaylistWithTracks(spotifyPlaylist : Spotify.Playlist) : Playlist {
    return new Playlist(spotifyPlaylist.id, spotifyPlaylist.name, spotifyPlaylist.tracks.items.map(playlistTrack => mapSpotifyTrack(playlistTrack.track)));
}

export function mapSpotifyTrack(spotifyTrack : Spotify.Track) : Track {
    return new Track(spotifyTrack.id, spotifyTrack.name, mapSpotifyAlbum(spotifyTrack.album), spotifyTrack.artists.map(artist => mapSpotifyArtist(artist)));
}

export function mapSpotifyAlbum(spotifyAlbum : Spotify.Album) : Album {
    return new Album(spotifyAlbum.id, spotifyAlbum.name);
}

export function mapSpotifyArtist(spotifyArtist : Spotify.Artist) : Artist {
    return new Artist(spotifyArtist.id, spotifyArtist.name);
}

export function mapExtraDataToArtist(artist : Artist, artistData : Artist) : Artist {
    artist.country = artistData.country;
    return artist;
}
