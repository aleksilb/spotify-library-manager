import * as Spotify from "../model/interfaces/spotify";
const fetch = require('node-fetch');

export function getUserPlaylists(authorization : string) : Promise<Spotify.Playlist[]> {
    return fetch('https://api.spotify.com/v1/me/playlists', {
        headers : {'authorization' : authorization}
    }).then(response =>
        response.json())
    .then(response =>
        response.items);
}

export function getPlaylist(id : string) : Spotify.Playlist {
    if(id === '0hXzW43N9IsskVZW6WlobW') {
        return require("../../mock/spotify/playlist_1.json");
    } else {
        return null;
    }
}
