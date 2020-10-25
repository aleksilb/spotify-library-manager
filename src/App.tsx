import React, {useState} from 'react';
import { TrackBrowser } from './components/TrackBrowser';
import { PlaylistBrowser } from './components/PlaylistBrowser';
import Data from "./scripts/Data";

function App() {
    const [tracks, setTracks] = useState(Data.getPlaylistTracks("mock-playlist"));
    const [playlists, setPlaylists] = useState(Data.getUserPlaylists("mock-user"))

    const selectHandler = (playlistId:string) => {
        setTracks(Data.getPlaylistTracks(playlistId));
    }

    return <div className="App">
        <PlaylistBrowser playLists={playlists} selectHandler={selectHandler}/>
        <TrackBrowser tracks={tracks}/>
    </div>;
}

export default App;
