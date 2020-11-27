import express = require("express");
import * as Playlist from "./Playlist"

const app = express();
const port = 3000;

app.get('/playlist/user/:userId', (req, res) => {
    res.send(Playlist.getUserPlaylists(req.params.userId))
})

app.get('/playlist/:playlistId', (req, res) => {
    res.send(Playlist.getPlaylist(req.params.playlistId));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
