import React from 'react';
import { TrackBrowser } from './components/TrackBrowser';
import { PlaylistBrowser } from './components/PlaylistBrowser';
import userPlaylists from './mock/user_playlists.json';
import playlistTracks from './mock/playlist_tracks.json';
import Playlist from "./classes/Playlist";
import Track from "./classes/Track";
import Mapper from "./scripts/Mapper";

function App() {
    let tracks : Track[] = Mapper.tracksFromSpotifyPlaylist(playlistTracks);
    let playlists : Playlist[] = Mapper.playlistsFromSpotifyUserPlaylists(userPlaylists);

    return <div className="App">
        <PlaylistBrowser playlists={playlists}/>
        <TrackBrowser tracks={tracks}/>
    </div>;
}

export default App;