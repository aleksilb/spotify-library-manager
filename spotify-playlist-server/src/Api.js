"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var Playlist = require("./Playlist");
var app = express();
var port = 3000;
app.get('/playlist/user/:userId', function (req, res) {
    res.send(Playlist.getUserPlaylists(req.params.userId));
});
app.get('/playlist/:playlistId', function (req, res) {
    res.send(Playlist.getPlaylist(req.params.playlistId));
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=Api.js.map