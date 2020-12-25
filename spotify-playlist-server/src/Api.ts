import express = require("express");
import cors = require('cors')
import * as Playlist from "./Playlist"

const app = express();
app.use(cors())
const port = 3001;

app.get('/playlist/user/:userId', (req, res) => {
    Playlist.getUserPlaylists(req.header('authorization'))
        .then(playlists => res.send(playlists));
})

app.get('/playlist/:playlistId', (req, res) => {
    res.send(Playlist.getPlaylist(req.params.playlistId));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
