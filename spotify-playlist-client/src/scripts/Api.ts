import Playlist from "../model/Playlist";

export function getUserPlaylists(token ?: string) : Promise<Playlist[]> {
    return fetch("http://localhost:3001/user-playlists", {
        headers : {'authorization':'Bearer ' + token}})
        .then(res => res.json());
}

export function getPlaylist(id : string) : Promise<Playlist> {
    return fetch("http://localhost:3001/playlist/0hXzW43N9IsskVZW6WlobW")
        .then(res => res.json());
}
