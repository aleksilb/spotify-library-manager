import express = require("express");
import cors = require('cors')
import * as Playlist from "./Playlist"

const app = express();
app.use(cors())
const port = 3001;

app.get('/user-playlists', (req, res) => {
    Playlist.getUserPlaylists(req.header('authorization'))
        .then(playlists => res.send(playlists));
})

app.get('/playlist/:playlistId', (req, res) => {
    Playlist.getPlaylist(req.params.playlistId).then(
        playlist => res.send(playlist)
    );
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
