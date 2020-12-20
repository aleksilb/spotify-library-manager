import React from 'react';
import Playlist from "../model/Playlist";
import {TrackBrowser} from "./TrackBrowser";

interface PlaylistProps {
    playlist ?: Playlist
}

function PlaylistView({playlist} : PlaylistProps) {
    return <div>
        {playlist != null ? <TrackBrowser tracks={playlist.tracks} /> : null}
    </div>
}

export default PlaylistView;
