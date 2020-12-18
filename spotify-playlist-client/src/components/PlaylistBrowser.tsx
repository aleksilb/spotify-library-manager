import React from 'react';
import Playlist from "../model/Playlist";

interface PlaylistBrowserProps {
    playLists : Playlist[],
    selectHandler : ((playlistId: string) => void)
}

export const PlaylistBrowser = ({playLists, selectHandler} : PlaylistBrowserProps) => {
    return <div>
        <h2>Playlists</h2>
        <ul>
        {playLists.map((playList) =>
            <li key={playList.id} onClick={selectHandler.bind(null, playList.id)}>{playList.name}</li>)}
        </ul>
    </div>
};
