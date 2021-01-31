import React, {useEffect, useState} from 'react';
import {Playlist, Track} from "../model/interfaces";
import {TrackBrowser} from "./TrackBrowser";
import * as Api from "../scripts/Api";

interface PlaylistProps {
    selectHandler : ((playlistId ?: string) => void)
    playlist ?: Playlist,
    token ?: string
}

function PlaylistView({playlist, selectHandler, token} : PlaylistProps) {
    const [tracks, setTracks] = useState((playlist != null) ? playlist.tracks : []);

    let tracksTmp = tracks;

    useEffect(() => {
        tracksTmp = tracks;
        const updateTrack = async function(id : string) {
            if(tracksTmp != null) {
                let track = await Api.getTrack(id);
                let trackIndex = tracksTmp.findIndex(track => track.id === id);
                if (trackIndex > 0) {
                    let newTracks = [...tracksTmp];
                    newTracks[trackIndex] = track;
                    setTracks(newTracks);
                    tracksTmp = newTracks;
                }
            }
        }
        if(tracksTmp != null) {
            for (const track of tracksTmp) {
                updateTrack(track.id);
            }
        }
    }, []);

    const handlePlaylistReset = () => {
        selectHandler(undefined);
    }

    const deleteTrackFromPlaylist = (id:string) => {
        if(playlist != null && token != null && tracks != null) {
            Api.deleteTrackFromPlaylist(playlist.id, id, token);
            let newTracks = [...tracks];
            const trackIndex = tracks.findIndex(track => track.id === id);
            newTracks.splice(trackIndex, 1);
            setTracks(newTracks);
            tracksTmp = newTracks;
        }
    }

    return <div>
        <button onClick={handlePlaylistReset}>Change playlist</button>
        {playlist != null ? <TrackBrowser tracks={tracks} deleteHandler={deleteTrackFromPlaylist}/> : null}
    </div>
}

export default PlaylistView;
