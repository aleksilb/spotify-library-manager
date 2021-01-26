import express = require("express");
import cors = require('cors')
import * as Library from "./Library"

const app = express();
app.use(cors())
const port = 3001;

app.get('/user-playlists', (req, res) => {
    Library.getUserPlaylists(req.header('authorization'))
        .then(playlists => res.send(playlists));
})

app.get('/playlist/:playlistId', (req, res) => {
    Library.getPlaylist(req.params.playlistId).then(
        playlist => res.send(playlist)
    );
});

app.get('/track/:trackId', (req, res) => {
    Library.getTrack(req.params.trackId).then(
        track => res.send(track)
    );
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
