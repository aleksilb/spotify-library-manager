"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSpotifyArtist = exports.mapSpotifyAlbum = exports.mapSpotifyTrack = exports.mapSpotifyPlaylistWithTracks = exports.mapSpotifyPlaylist = void 0;
var Playlist_1 = require("./model/Playlist");
var Track_1 = require("./model/Track");
var Album_1 = require("./model/Album");
var Artist_1 = require("./model/Artist");
function mapSpotifyPlaylist(spotifyPlaylist) {
    return new Playlist_1.default(spotifyPlaylist.id, spotifyPlaylist.name);
}
exports.mapSpotifyPlaylist = mapSpotifyPlaylist;
function mapSpotifyPlaylistWithTracks(spotifyPlaylist) {
    return new Playlist_1.default(spotifyPlaylist.id, spotifyPlaylist.name, spotifyPlaylist.tracks.items.map(function (playlistTrack) { return mapSpotifyTrack(playlistTrack.track); }));
}
exports.mapSpotifyPlaylistWithTracks = mapSpotifyPlaylistWithTracks;
function mapSpotifyTrack(spotifyTrack) {
    return new Track_1.default(spotifyTrack.id, spotifyTrack.name, mapSpotifyAlbum(spotifyTrack.album), spotifyTrack.artists.map(function (artist) { return mapSpotifyArtist(artist); }));
}
exports.mapSpotifyTrack = mapSpotifyTrack;
function mapSpotifyAlbum(spotifyAlbum) {
    return new Album_1.default(spotifyAlbum.id, spotifyAlbum.name);
}
exports.mapSpotifyAlbum = mapSpotifyAlbum;
function mapSpotifyArtist(spotifyArtist) {
    return new Artist_1.default(spotifyArtist.id, spotifyArtist.name);
}
exports.mapSpotifyArtist = mapSpotifyArtist;
//# sourceMappingURL=Mapping.js.map