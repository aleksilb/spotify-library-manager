import {Playlist, Track} from "../model/interfaces";

export function getUserPlaylists(token ?: string) : Promise<Playlist[]> {
    return fetch("http://localhost:3001/user-playlists", {
        headers : {'authorization':'Bearer ' + token}})
        .then(res => res.json());
}

export function getPlaylist(id : string) : Promise<Playlist> {
    return fetch("http://localhost:3001/playlist/" + id)
        .then(res => res.json());
}

export function getTrack(id : string) : Promise<Track> {
    return fetch("http://localhost:3001/track/" + id)
        .then(res => res.json());
}

export function deleteTrackFromPlaylist(playlistId : string, trackId :string, token:string) {
    fetch("http://localhost:3001/playlist/" + playlistId + "/track/" + trackId, {
        headers : {'authorization':'Bearer ' + token},
        method:"DELETE"
        });
}
