import express = require("express");
import cors = require('cors')
import * as Playlist from "./Playlist"

const app = express();
app.use(cors())
const port = 3001;

app.get('/playlist/user/:userId', (req, res) => {
    res.send(Playlist.getUserPlaylists(req.params.userId))
})

app.get('/playlist/:playlistId', (req, res) => {
    res.send(Playlist.getPlaylist(req.params.playlistId, true));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
