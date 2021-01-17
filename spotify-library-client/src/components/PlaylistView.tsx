import React from 'react';
import {Playlist} from "../model/interfaces";
import {TrackBrowser} from "./TrackBrowser";

interface PlaylistProps {
    selectHandler : ((playlistId ?: string) => void)
    playlist ?: Playlist
}

function PlaylistView({playlist, selectHandler} : PlaylistProps) {

    const handlePlaylistReset = () => {
        selectHandler(undefined);
    }

    return <div>
        <button onClick={handlePlaylistReset}>Change playlist</button>
        {playlist != null ? <TrackBrowser tracks={playlist.tracks} /> : null}
    </div>
}

export default PlaylistView;
