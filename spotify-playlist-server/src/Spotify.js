"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaylist = exports.getUserPlaylists = void 0;
function getUserPlaylists(userName) {
    return require("../mock/spotify/playlists_aleksi.json").items;
}
exports.getUserPlaylists = getUserPlaylists;
function getPlaylist(id) {
    return require("../mock/spotify/playlist_1.json");
}
exports.getPlaylist = getPlaylist;
//# sourceMappingURL=Spotify.js.map