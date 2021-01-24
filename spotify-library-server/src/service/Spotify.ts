import * as SpotifyModel from "../model/external/spotify";
import {fileURLToPath} from "url";

const fetch = require('node-fetch');

let token: Promise<string> = null;
const clientId: string = '5be0cbaaf98842f8bd292fca6a502b81';
const clientSecret: string = '6818277bd0c44514bd8e75fcbdcb18f3';

function fetchToken(): Promise<string> {
    return fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
            'grant_type': 'client_credentials'
        }),
        headers: {'authorization': 'Basic ' + Buffer.from(clientId + ":" + clientSecret).toString('base64')}
    })
        .then(response =>
            response.json())
        .then(
            response => response.access_token);
}

export function getToken(): Promise<string> {
    if (token == null) {
        token = fetchToken();
    }
    return token;
}

export async function getUserPlaylists(authorization: string): Promise<SpotifyModel.Playlist[]> {
    const pageSize = 50;
    const playlistData: SpotifyModel.UserPlaylists = await fetch('https://api.spotify.com/v1/me/playlists?offset=0&limit='+pageSize, {
        headers: {'authorization': authorization}
    })
        .then(response =>
            response.json());

    let playlists = playlistData.items;

    let handled = pageSize;
    let calls = [];
    while (handled < playlistData.total) {
        let callUrl = 'https://api.spotify.com/v1/me/playlists?offset='+handled+'&limit='+pageSize;
        const call = fetch(callUrl, {
            headers: {'authorization': authorization}
        })
            .then(response =>
                response.json())
            .then(response =>
                playlists = playlists.concat(response.items));
        calls.push(call);
        handled += pageSize;
    }

    await Promise.all(calls);

    return playlists;
}

export async function getPlaylist(id: string): Promise<SpotifyModel.Playlist> {
    let token = await getToken();

    let playlist = await fetch('https://api.spotify.com/v1/playlists/' + id, {
            headers: {'authorization': 'Bearer ' + token}})
        .then(response => response.json())
        .catch(error => {
            console.error("Failed to fetch playlist " +id + " from Spotify.")
            console.error(error);
        });

    let tracks = await getAdditionalPlaylistTracks(playlist);
    playlist.tracks.items = tracks;

    return playlist;
}

async function getAdditionalPlaylistTracks(playlist: SpotifyModel.Playlist): Promise<SpotifyModel.PlaylistTrack[]> {
    let token = await getToken();

    let tracks = playlist.tracks.items;
    let pageSize = playlist.tracks.limit;
    let handled = pageSize;
    let calls = [];
    while (handled < playlist.tracks.total) {
        let callUrl = 'https://api.spotify.com/v1/playlists/'+playlist.id+'/tracks?offset='+handled+'&limit='+pageSize;
        const call = fetch(callUrl, {
            headers: {'authorization': 'Bearer ' + token}})
            .then(response =>
                response.json())
            .then(response =>
                tracks = tracks.concat(response.items));
        calls.push(call);
        handled += pageSize;
    }

    await Promise.all(calls);

    return tracks;
}
