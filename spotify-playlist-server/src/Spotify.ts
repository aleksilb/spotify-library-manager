import {Playlist} from "./model/interfaces/spotify";

export function getUserPlaylists(userName : string) : Playlist[] {
    return require("../mock/spotify/playlists_aleksi.json").items;
}

export function getPlaylist(id : string) : Playlist {
    return require("../mock/spotify/playlist_1.json");
}
