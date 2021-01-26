import React, {useEffect, useState} from 'react';
import {Playlist} from "../model/interfaces";
import {TrackBrowser} from "./TrackBrowser";
import * as Api from "../scripts/Api";

interface PlaylistProps {
    selectHandler : ((playlistId ?: string) => void)
    playlist ?: Playlist
}

function PlaylistView({playlist, selectHandler} : PlaylistProps) {
    const [tracks, setTracks] = useState((playlist != null) ? playlist.tracks : undefined);

    useEffect(() => {
        if(playlist != null && playlist.tracks != null) {
            let plTracks = playlist.tracks;
            plTracks.forEach(
                track => Api.getTrack(track.id)
                    .then(track => {
                        if(tracks != null) {
                            let trackIndex = plTracks.findIndex(plTrack => plTrack.id === track.id);
                            let newTracks = [...plTracks];
                            newTracks[trackIndex] = track;
                            setTracks(newTracks);
                            plTracks = newTracks;
                        }
                    }));
        }
    }, []);

    const handlePlaylistReset = () => {
        selectHandler(undefined);
    }

    return <div>
        <button onClick={handlePlaylistReset}>Change playlist</button>
        {playlist != null ? <TrackBrowser tracks={tracks} /> : null}
    </div>
}

export default PlaylistView;
