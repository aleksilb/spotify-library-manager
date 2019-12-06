import React from 'react';
import Playlist from "../classes/Playlist";

interface PlaylistBrowserProps {
    playlists : Playlist[]
}

export const PlaylistBrowser = (props : PlaylistBrowserProps) => {
    return <div>
        <h2>Playlists</h2>
        <ul>
        {props.playlists.map((playlist) =>
            <li key={playlist.id}>{playlist.name}</li>
            )}
    </ul>
    </div>
};