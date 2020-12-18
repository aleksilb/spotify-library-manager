import React from 'react';
import Playlist from "../model/Playlist";
import {TrackBrowser} from "./TrackBrowser";

interface PlaylistProps {
    playlist : Playlist
}

function PlaylistView({playlist} : PlaylistProps) {
    return <div>
        <TrackBrowser tracks={playlist.tracks} />
    </div>
}

export default PlaylistView;
