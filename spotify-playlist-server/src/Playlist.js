"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlaylist = exports.getUserPlaylists = void 0;
var Spotify = require("./Spotify");
var Mapper = require("./Mapping");
var Enriching = require("./Enriching");
function getUserPlaylists(userName) {
    var spotifyPlaylists = Spotify.getUserPlaylists(userName);
    var playlists = spotifyPlaylists.map(function (spotifyPlaylist) { return Mapper.mapSpotifyPlaylist(spotifyPlaylist); });
    return playlists;
}
exports.getUserPlaylists = getUserPlaylists;
function getPlaylist(id) {
    var playlist = Mapper.mapSpotifyPlaylistWithTracks(Spotify.getPlaylist(id));
    Enriching.enrichPlaylist(playlist);
    return playlist;
}
exports.getPlaylist = getPlaylist;
//# sourceMappingURL=Playlist.js.map