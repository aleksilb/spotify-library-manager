import React, {useEffect, useState} from "react";
import {Playlist} from "./model/interfaces";
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

    const selectHandler = (playlistId ?: string) => {
        if(playlistId != null) {
            Api.getPlaylist(playlistId).then(playlist => {
                setPlaylist(playlist);
            })
        } else {
            setPlaylist(undefined);
        }
    }

    return <div className="App">
        {(playlist == null) ? <PlaylistBrowser playlists={playlists} selectHandler={selectHandler}/> : <PlaylistView playlist={playlist} selectHandler={selectHandler} />}
    </div>;
}

export default PlaylistApp;
