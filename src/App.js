import React from 'react';
import SongList from './components/SongList.js';
import PlaylistList from './components/PlaylistList';
import userPlaylists from './mock/user_playlists.json';
import playlistTracks from './mock/playlist_tracks.json';
import TrackList from "./classes/TrackList";

function App() {
    trackList : TrackList = TrackList.createFromSpotify(playlistTracks);

    return <div className="App">
        <PlaylistList playlists={userPlaylists.items}/>
        <SongList items={playlistTracks.items}/>
    </div>;
}

export default App;