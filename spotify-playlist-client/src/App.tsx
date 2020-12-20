import React, {useState} from 'react';
import { PlaylistBrowser } from './components/PlaylistBrowser';
import * as Api from './scripts/Api';
import PlaylistView from "./components/PlaylistView";
import Playlist from "./model/Playlist";

function App() {
    const [playlist, setPlaylist] = useState<Playlist | undefined>(undefined);
    const [playlists, setPlaylists] = useState(Api.getUserPlaylists("mock-user"));

    const selectHandler = (playlistId:string) => {
        Api.getPlaylist(playlistId).then(playlist => {
            setPlaylist(playlist);
        })
    }

    return <div className="App">
        <PlaylistBrowser playLists={playlists} selectHandler={selectHandler}/>
        <PlaylistView playlist={playlist} />
    </div>;
}

export default App;
