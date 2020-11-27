import Playlist from "./model/Playlist";
import * as Spotify from "./Spotify";
import * as Mapper from "./Mapping";
import * as Enriching from "./Enriching";

export function getUserPlaylists(userName : string) : Playlist[] {
    let spotifyPlaylists = Spotify.getUserPlaylists(userName);
    let playlists = spotifyPlaylists.map(spotifyPlaylist => Mapper.mapSpotifyPlaylist(spotifyPlaylist));
    return playlists;
}

export function getPlaylist(id : string) : Playlist {
    let playlist = Mapper.mapSpotifyPlaylistWithTracks(Spotify.getPlaylist(id));
    Enriching.enrichPlaylist(playlist);
    return playlist;
}
