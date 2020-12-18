import React, {useState} from 'react';
import { PlaylistBrowser } from './components/PlaylistBrowser';
import * as Api from './scripts/Api';
import PlaylistView from "./components/PlaylistView";

function App() {
    const [playlist, setPlaylist] = useState(Api.getPlaylist("mock-playlist"));
    const [playlists, setPlaylists] = useState(Api.getUserPlaylists("mock-user"));

    const selectHandler = (playlistId:string) => {
        setPlaylist(Api.getPlaylist(playlistId));
    }

    return <div className="App">
        <PlaylistBrowser playLists={playlists} selectHandler={selectHandler}/>
        <PlaylistView playlist={playlist} />
    </div>;
}

export default App;
