import React, {useEffect, useState} from "react";
import Playlist from "./model/Playlist";
import * as Api from "./scripts/Api";
import {PlaylistBrowser} from "./components/PlaylistBrowser";
import PlaylistView from "./components/PlaylistView";

interface PlaylistAppProps {
    token ?: string
}

function PlaylistApp({token} : PlaylistAppProps) {
    const [playlist, setPlaylist] = useState<Playlist | undefined>(undefined);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    useEffect(() => {
        Api.getUserPlaylists(token).then(playlists => {
            setPlaylists(playlists);
        })
    }, []);

    const selectHandler = (playlistId:string) => {
        Api.getPlaylist(playlistId).then(playlist => {
            setPlaylist(playlist);
        })
    }

    return <div className="App">
        <PlaylistBrowser playlists={playlists} selectHandler={selectHandler}/>
        <PlaylistView playlist={playlist} />
    </div>;
}

export default PlaylistApp;
