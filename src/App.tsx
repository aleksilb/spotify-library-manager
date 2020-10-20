import React, {useState} from 'react';
import { TrackBrowser } from './components/TrackBrowser';
import { PlaylistBrowser } from './components/PlaylistBrowser';
import Spotify from "./scripts/Spotify";

function App() {
    const [tracks, setTracks] = useState(Spotify.getPlaylistTracks("mock-playlist"));
    const [playlists, setPlaylists] = useState(Spotify.getUserPlaylists("mock-user"))

    const selectHandler = (playlistId:string) => {
        setTracks(Spotify.getPlaylistTracks(playlistId));
    }

    return <div className="App">
        <PlaylistBrowser playLists={playlists} selectHandler={selectHandler}/>
        <TrackBrowser tracks={tracks}/>
    </div>;
}

export default App;
