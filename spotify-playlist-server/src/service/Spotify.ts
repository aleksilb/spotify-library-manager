import * as Spotify from "../model/interfaces/spotify";

export function getUserPlaylists(userName : string) : Spotify.Playlist[] {
    if(userName === 'aleksi') {
        return require("../../mock/spotify/playlists_aleksi.json").items;
    } else {
        return null;
    }
}

export function getPlaylist(id : string) : Spotify.Playlist {
    if(id === '0hXzW43N9IsskVZW6WlobW') {
        return require("../../mock/spotify/playlist_1.json");
    } else {
        return null;
    }
}
