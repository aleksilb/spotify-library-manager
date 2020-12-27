import React from 'react';
import {Playlist} from "../model/interfaces";

interface PlaylistBrowserProps {
    playlists : Playlist[],
    selectHandler : ((playlistId: string) => void)
}

export const PlaylistBrowser = ({playlists, selectHandler} : PlaylistBrowserProps) => {
    return <div>
        <h2>Playlists</h2>
        <ul>
        {playlists.map(playlist => {
                if(playlist != null) return <li key={playlist.id} onClick={selectHandler.bind(null, playlist.id)}>{playlist.name}</li>
            })
        }
        </ul>
    </div>
};
